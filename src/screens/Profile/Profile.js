import React from 'react';
import {
  View,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import SnackBar from 'react-native-snackbar';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import server from '../../service/server';
import styles from './Profile.style';

import HeaderList from './Header';
import ProfileSettings from '../../components/Modals/ProfileSettings';

export default function Profile() {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [visible, setVisible] = React.useState(false);

  const [posts, setPost] = React.useState([
    {postId: 1},
    {postId: 1},
    {postId: 3},
    {postId: 4},
  ]);
  const [isRefreshing, setRefreshing] = React.useState(false);
  const isOdd = (data) => {
    return data.postId % 2 === 0;
  }
  const fetchProfile = async () => {
    try {
      setLoading(true);
      const response = await server.getProfile();
      if (response.status === 200) {
        if (response.data.success) {
          const {posts: postData} = response.data.data;
          const {username, profile, email} = response.data.data;
          const user = {username: username, email: email, profile: profile};
          if(!isOdd(postData)) {
            const tempPost = {postId: Math.random(), image: '', title: ''};
            const data = [...postData, tempPost];
            setPost(data);
          } else {
            setPost(postData);
          }
          setLoading(false);
          setData(user);
        } else {
          SnackBar.show({
            text: response.data.message,
            duration: SnackBar.LENGTH_SHORT,
          });
          setLoading(false);
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
    fetchProfile();
  }, []);

  const onClose = () => { 
    setVisible(false);
  }

  const onOpen = () => {
    setVisible(true);
  }

  const Item = ({image}) => {
    return (
      <TouchableOpacity>
        <Image source={{uri: image}} style={styles.image} />
      </TouchableOpacity>
    );
  };

  const renderFeed = ({item}) => {
    return <Item image={item.image} />;
  };
  const loadingItems = () => {
    return (
      <SkeletonPlaceholder>
        <View style={styles.image} />
      </SkeletonPlaceholder>
    );
  };
  const handleRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchProfile();
    setRefreshing(false);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          ListHeaderComponent={<HeaderList onOpen={onOpen} loading={loading} data={data} fetchProfile={fetchProfile}/>}
          numColumns={2}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
            />
          }
          columnWrapperStyle={styles.container}
          data={posts}
          renderItem={loading ? loadingItems : renderFeed}
          keyExtractor={(item) => item.postId}
        />
      </View>
      <ProfileSettings 
        visible={visible}
        onClose={onClose}
      />
    </SafeAreaView>
  );
}
