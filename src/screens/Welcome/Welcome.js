import * as React from 'react';
import {View, Text, ImageBackground, Image, StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNetInfo} from '@react-native-community/netinfo';

import styles from './Welcome.style';

import server from '../../service/server';
import NotConnected from '../../components/NotConnected/NotConnected';

const backgroundImage = require('../../assets/images/background.png');

const logo = require('../../assets/images/logo.png');

export default function Welcome(props) {
  const {navigation} = props;

  const [post, setPost] = React.useState(null);

  const netInfo = useNetInfo();

  const mounted = React.useRef(true);

  const goTo = (place) => {
    navigation.navigate(place);
  };

  const getPost = async () => {
    try {
      if (netInfo.isConnected) {
        const response = await server.getMostLiked();
        if (response.data.success) {
          const {data} = response.data;
          if (mounted.current) {
            setPost(data);
            console.log(post);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getPost();
  }, []);


  React.useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);

  if (!netInfo.isConnected) {
    return (
       <NotConnected />
    );
  }
  return (
    <ImageBackground
      source={post ? {uri: post.image_ref} : backgroundImage}
      style={styles.imageContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.second}>
        <View style={styles.brandlogo}>
          <View style={styles.logo}>
            <Image source={logo} style={styles.avater} />
          </View>
        </View>
      </View>
      <View style={styles.first}>
        <View style={styles.buttonActions}>
          <TouchableOpacity
            style={styles.loginbtn}
            activeOpacity={0.7}
            onPress={() => goTo('signin')}>
            <Text style={styles.loginText}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.registerbtn}
            activeOpacity={0.7}
            onPress={() => goTo('signup')}>
            <Text style={styles.registerText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
