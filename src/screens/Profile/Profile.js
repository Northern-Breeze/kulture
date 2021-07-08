import React from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import SnackBar from 'react-native-snackbar';
import Feed from '../../components/Feed';

import server from '../../service/server';
import styles from './Profile.style';

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
          const {posts} = response.data.data;
          const {username, profile, email} = response.data.data;
          const user = {username: username, email: email, profile: profile};
          setPost(posts);
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.avatarContainer}>
          <View>
            <Image
              source={{uri: 'https://picsum.photos/200/300?grayscale'}}
              style={styles.avatar}
            />
          </View>
        </View>
        <View>
          <View style={styles.usernameContainer}>
            {loading && <Text style={styles.username}>loading ...</Text>}
            {!loading && data !== null && (
              <Text style={styles.username}>{data.username}</Text>
            )}
          </View>
          <View style={styles.locationContainer}>
            <Text style={styles.locations}>South Africa, Polokwane</Text>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity activeOpacity={0.9} style={styles.button}>
            <Text style={styles.buttonTextAdd}>Add New Post</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonSettings]}
            activeOpacity={0.9}>
            <Text style={[styles.buttonTextAdd, styles.buttonTextSettings]}>
              Settings
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Feed data={posts} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
