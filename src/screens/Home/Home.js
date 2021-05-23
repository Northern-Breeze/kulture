import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './Home.style';

import Feed from '../../components/Feed';

const avatar = require('../../assets/images/avatar.png');

const {width, height} = Dimensions.get('screen');

export default function Home(props) {
  const {navigation} = props;
  const IMAGE_SIZE = 80;
  const SPACING = 10;
  const [activeIndex, setActiveIndex] = React.useState(0);
  const topRef = React.useRef();
  const bottomRef = React.useRef();

  const [data] = React.useState([
    {
      id: 1,
      image: 'https://picsum.photos/200/300?random=1',
    },
    {
      id: 2,
      image: 'https://picsum.photos/200/300?random=2',
    },
    {
      id: 3,
      image: 'https://picsum.photos/200/300?random=3',
    },
    {
      id: 4,
      image: 'https://picsum.photos/200/300?random=4',
    },
    {
      id: 5,
      image: 'https://picsum.photos/200/300?random=5',
    },
    {
      id: 6,
      image: 'https://picsum.photos/200/300?random=6',
    },
    {
      id: 7,
      image: 'https://picsum.photos/200/300?random=7',
    },
    {
      id: 8,
      image: 'https://picsum.photos/200/300?random=8',
    },
  ]);

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
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <FlatList
        ref={topRef}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(ev) => {
            scrollToActiveIndex(
                Math.floor(Math.floor(ev.nativeEvent.contentOffset.x) / Math.floor(width)),
                );
        }}
        renderItem={({item}) => {
          return (
            <View style={{width, height}}>
              <Image
                source={{uri: item.image}}
                style={[StyleSheet.absoluteFillObject]}
              />
            </View>
          );
        }}
      />
      <FlatList
        ref={bottomRef}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{position: 'absolute', bottom: IMAGE_SIZE}}
        contentContainerStyle={{paddingHorizontal: SPACING}}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setActiveIndex(index)
                topRef?.current?.scrollToOffset({
                    offset: index * width,
                    animated: true,
                  });
              }}
              activeOpacity={0.7}>
              <Image
                source={{uri: item.image}}
                style={{
                  width: IMAGE_SIZE,
                  height: IMAGE_SIZE,
                  borderRadius: 12,
                  borderColor: activeIndex === index ? '#fff' : 'transparent',
                  borderWidth: 2,
                  marginRight: SPACING,
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
