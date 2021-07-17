import React from 'react';
import {
  View,
  Image,
  FlatList,
  Dimensions
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SnackBar from 'react-native-snackbar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import server from '../../service/server';
import styles from './Home.style';

const {width, height} = Dimensions.get('screen');

export default function Home(props) {
  // props
  const {navigation} = props;

  // states
  const [IMAGE_SIZE] = React.useState(80);
  const [SPACING] = React.useState(10);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [posts, setPost] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  // Refs
  const topRef = React.useRef();
  const bottomRef = React.useRef();
  const mounted = React.useRef(true);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await server.getAllPost();
      if (response.status === 200) {
        if (response.data.success) {
          const {data} = response.data;
          if (mounted.current) {
            setPost(data);
            setLoading(false);
          }
        } else if (response.status === 401) {
          navigation.navigate('signin');
        } else {
          SnackBar.show({
            text: response.data.message,
            duration: SnackBar.LENGTH_SHORT,
          });
          if (mounted.current) {
            setLoading(false);
          }
        }
      } else {
        SnackBar.show({
          text: response.data.message,
          duration: SnackBar.LENGTH_SHORT,
        });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      SnackBar.show({
        text: 'Something went wrong, please try again',
        duration: SnackBar.LENGTH_SHORT,
      });
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);

  React.useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);

  const scrollToActiveIndex = (index) => {
    setActiveIndex(index);
    if (index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > width / 2) {
      bottomRef?.current?.scrollToOffset({
        offset: index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2,
        animated: true,
      });
    } else {
      bottomRef?.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={topRef}
        data={posts}
        keyExtractor={(item) => item.postId.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(ev) => {
          scrollToActiveIndex(
            Math.floor(
              Math.floor(ev.nativeEvent.contentOffset.x) / Math.floor(width),
            ),
          );
        }}
        renderItem={({item}) => {
          return (
            <TouchableOpacity activeOpacity={0.9}>
              <Image
                source={{uri: item.image}}
                style={{ width: wp(100), height: hp(100) }}
              />
            </TouchableOpacity>
          );
        }}
      />
      <FlatList
        ref={bottomRef}
        data={posts}
        keyExtractor={(item) => item.postId.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{position: 'absolute', bottom: IMAGE_SIZE}}
        contentContainerStyle={{paddingHorizontal: SPACING}}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setActiveIndex(index);
                topRef?.current?.scrollToOffset({
                  offset: index * width,
                  animated: true,
                });
              }}
              activeOpacity={0.7}>
              <Image
                source={{uri: item.image}}
                style={[
                  styles.bottomScroll,
                  {width: IMAGE_SIZE, height: IMAGE_SIZE},
                  {borderColor: activeIndex === index ? '#fff' : 'transparent'},
                  {marginRight: SPACING},
                ]}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
