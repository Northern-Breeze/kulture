import React from 'react';
import {Dimensions, View, Text, Pressable} from 'react-native';
import SnackBar from 'react-native-snackbar';
import {useNetInfo} from '@react-native-community/netinfo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useStoreActions} from 'easy-peasy';

import server from '../../service/server';
import styles from './Home.style';

// Components
import TopList from '../../components/Feed/TopList';
import BottomList from '../../components/Feed/BottomList';
import EmptyList from '../../components/EmptyList';
import NotConnected from '../../components/NotConnected';
import Loading from '../../components/Loading';

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
  const [loadingMore, setLoadingMore] = React.useState(false);
  const [requestStatus, setRequestStatus] = React.useState('LOADING')

  const setIsLoggin = useStoreActions((actions) => actions.setIsLoggin);
  const netinfo = useNetInfo();


  // data set
  const [page, setPage] = React.useState(1);
  const [size, setSize] = React.useState(5);

  // Refs
  const topRef = React.useRef();
  const bottomRef = React.useRef();
  const mounted = React.useRef(true);

  const fetchPosts = async () => {
    try {
      setRequestStatus('LOADING');
      const response = await server.getAllPost({ page, size});

      // UnAuthorize 
      if (response.status === 401) {
        setIsLoggin(false);
        setRequestStatus('FAILED');
      }
      
      if (response.data.success) {
        const {data} = response.data;
        if (mounted.current) {
          setPost(data);
          setRequestStatus('SUCCESS');
          setPage((p) => p + 1);
        }
      } else {
        SnackBar.show({
          text: response.data.message,
          duration: SnackBar.LENGTH_SHORT,
        });
        if (mounted.current) {
          setRequestStatus('FAILED');
        }
        setRequestStatus('FAILED');
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      SnackBar.show({
        text: 'Something went wrong, please try again',
        duration: SnackBar.LENGTH_SHORT,
      });
      setRequestStatus('FAILED');
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

  const handleLoadMore = async () => {
    try {
      setLoadingMore(true);
      const response = await server.getAllPost({ page, size});

      // UnAuthorized
      if (response.status === 401) {
        setLoadingMore(false);
      }

      if (response.data.success) {
        const {data} = response.data;
        if (mounted.current) {
          if(data.length === 0){
            SnackBar.show({
              text: 'You have reached the end, A post?',
              action: {
                text: 'Add Post',
                textColor: 'green',
                onPress: () => {
                  navigation.navigate('Add');
                }
              }
            })
            setLoadingMore(false);
          } else {
            // const list = posts;
            // const combined = list.concat(data);
            const combined = [...posts, ...data];
            setPost(combined);
            setLoadingMore(false);
            setPage((p) => p + 1);

          }
        }
      } else {
        SnackBar.show({
          text: response.data.message,
          duration: SnackBar.LENGTH_SHORT,
        });
        if (mounted.current) {
          setLoadingMore(false);
        }
      }
      setLoadingMore(false);
    } catch (error) {
      console.log(error);
      SnackBar.show({
        text: 'Something went wrong',
        duration: SnackBar.LENGTH_SHORT
      })
      setLoadingMore(false);
    }
  };

  const refreshHandler = async () => {
    try {
      setLoading(true);
      const response = await server.getAllPost({ page, size});
      if (response.status === 401) {
        setLoading(false);
      }
      if (response.data.success) {
        const {data} = response.data;
        if (mounted.current) {
          setPost(data);
          setLoading(false);
        }
      } else {
        SnackBar.show({
          text: response.data.message,
          duration: SnackBar.LENGTH_SHORT,
        });
        if (mounted.current) {
          setLoading(false);
        }
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      SnackBar.show({
        text: 'Something went wrong, please try again',
        duration: SnackBar.LENGTH_SHORT,
      });
      setLoading(false);
    }
  };

  if (!netinfo.isConnected) {
    return <NotConnected />;
  }

  return (
    <>
      {requestStatus === 'FAILED' && (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <MaterialIcons name="error-outline" color="#000" size={50} />
          <Text style={[styles.subheaderText, { color: '#000' }]}>
            Something Wrong Occurred
          </Text>
          <Pressable style={styles.button} onPress={fetchPosts}>
            <Text style={styles.subheaderText}>
              Reload
            </Text>
          </Pressable>
        </View>
      )}
      {requestStatus === 'EMPTY' && (
        <EmptyList refreshHandler={refreshHandler} />
      )}
      {requestStatus === 'LOADING' && (
        <Loading />
      )}
      {requestStatus === 'SUCCESS' && (
        <>
          <TopList
            posts={posts}
            topRef={topRef}
            scrollToActiveIndex={scrollToActiveIndex}
            activeIndex={activeIndex}
            handleLoadMore={handleLoadMore}
            navigation={navigation}
          />
          <BottomList
            bottomRef={bottomRef}
            topRef={topRef}
            posts={posts}
            IMAGE_SIZE={IMAGE_SIZE}
            SPACING={SPACING}
            handleLoadMore={handleLoadMore}
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
          />
        </>
      )}
    </>
  );
}
