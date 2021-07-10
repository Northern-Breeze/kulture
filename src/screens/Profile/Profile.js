import React from 'react';
import {View, FlatList, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import SnackBar from 'react-native-snackbar';
import Feed from '../../components/Feed';

import server from '../../service/server';
import styles from './Profile.style';

import HeaderList from './Header';

export default function Profile() {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [posts, setPost] = React.useState([]);
  const fetchProfile = async () => {
    try {
      setLoading(true);
      const response = await server.getProfile();
      if (response.status === 200) {
        if (response.data.success) {
          const {posts: postData} = response.data.data;
          const {username, profile, email} = response.data.data;
          const user = {username: username, email: email, profile: profile};
          setPost(postData);
          setData(user);
          setLoading(false);
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

  const Item = ({image}) => {
    console.log(image);
    return (
      <TouchableOpacity>
        <Image source={{uri: image}} style={styles.image} />
      </TouchableOpacity>
    );
  };
  const renderFeed = ({item}) => <Item image={item.image} />;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          ListHeaderComponent={<HeaderList loading={loading} data={data} />}
          numColumns={2}
          columnWrapperStyle={styles.container}
          data={posts}
          renderItem={renderFeed}
          keyExtractor={(item) => item.postId}
        />
      </View>
    </SafeAreaView>
  );
}
