import React from 'react';
import {View, Dimensions, Text} from 'react-native';
import SnackBar from 'react-native-snackbar';

import server from '../../service/server';

// Components
import TopList from '../../components/Feed/TopList';
import BottomList from '../../components/Feed/BottomList';
import EmptyList from '../../components/EmptyList';

const {width} = Dimensions.get('screen');

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
          //
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

  const handleLoadMore = () => {
    //
    console.log('end reached');
  }

  const refreshHandler = async () => {
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
          //
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

  if (loading) {
    <View>
      <Text>Loading ...</Text>
    </View>;
  }

  return (
    <>
      {posts.length === 0 && <EmptyList refreshHandler={refreshHandler} />}
      {posts.length > 0 && (
        <>
          <TopList
            posts={posts}
            topRef={topRef}
            scrollToActiveIndex={scrollToActiveIndex}
            activeIndex={activeIndex}
            handleLoadMore={handleLoadMore}
          />
          <BottomList
            bottomRef={bottomRef}
            posts={posts}
            IMAGE_SIZE={IMAGE_SIZE}
            SPACING={SPACING}
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
          />
        </>
      )}
    </>
  );
}
