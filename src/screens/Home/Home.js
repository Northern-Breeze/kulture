import React from 'react';
import {View, Text, Pressable} from 'react-native';
import SnackBar from 'react-native-snackbar';
import {useNetInfo} from '@react-native-community/netinfo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import server from '../../service/server';

// Components
import TopList from '../../components/Feed/TopList';
import EmptyList from '../../components/EmptyList';
import NotConnected from '../../components/NotConnected';
import Loading from '../../components/Loading';

export default function Home(props) {
  // props
  const {navigation} = props;

  // states
  const [users, setUsers] = React.useState([]);
  const [requestStatus, setRequestStatus] = React.useState('LOADING');

  const netinfo = useNetInfo();

  // data set
  const [page] = React.useState(1);
  const [size] = React.useState(5);

  // Refs
  const mounted = React.useRef(true);

  const fetchPosts = async () => {
    try {
      setRequestStatus('LOADING');
      const response = await server.getAllUsers();

      // UnAuthorize
      if (response.status === 401) {
        setRequestStatus('FAILED');
      }

      if (response.data.success) {
        const {data} = response.data;
        if (mounted.current) {
          setUsers(data);
          setRequestStatus('SUCCESS');
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

  const handleLoadMore = async () => {
    try {
      setLoadingMore(true);
      const response = await server.getAllPost({page, size});

      // UnAuthorized
      if (response.status === 401) {
        setLoadingMore(false);
      }

      if (response.data.success) {
        const {data} = response.data;
        if (mounted.current) {
          if (data.length === 0) {
            SnackBar.show({
              text: 'You have reached the end, A post?',
              action: {
                text: 'Add Post',
                textColor: 'green',
                onPress: () => {
                  navigation.navigate('Add');
                },
              },
            });
            setLoadingMore(false);
          } else {
            const combined = [...posts, ...data];
            setUsers(combined);
            setLoadingMore(false);
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
        duration: SnackBar.LENGTH_SHORT,
      });
      setLoadingMore(false);
    }
  };

  const refreshHandler = async () => {
    try {
      const response = await server.getAllPost({page, size});
      
      if (response.data.success) {
        const {data} = response.data;
        if (mounted.current) {
          setUsers(data);
        }
      } else {
        SnackBar.show({
          text: response.data.message,
          duration: SnackBar.LENGTH_SHORT,
        });
      }
    } catch (error) {
      console.log(error);
      SnackBar.show({
        text: 'Something went wrong, please try again',
        duration: SnackBar.LENGTH_SHORT,
      });
    }
  };

  if (!netinfo.isConnected) {
    return <NotConnected />;
  }

  return (
    <>
      {requestStatus === 'FAILED' && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <MaterialIcons name="error-outline" color="#000" size={50} />
          <Text>Something Wrong Occurred</Text>
          <Pressable onPress={fetchPosts}>
            <Text>Reload</Text>
          </Pressable>
        </View>
      )}
      {requestStatus === 'EMPTY' && (
        <EmptyList refreshHandler={refreshHandler} />
      )}
      {requestStatus === 'LOADING' && <Loading />}
      {requestStatus === 'SUCCESS' && (
          <TopList
            users={users}
            handleLoadMore={handleLoadMore}
            navigation={navigation}
          />
      )}
    </>
  );
}
