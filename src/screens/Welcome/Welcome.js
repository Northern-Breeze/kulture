import * as React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StatusBar,
  Animated,
  Easing,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNetInfo} from '@react-native-community/netinfo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './Welcome.style';

import server from '../../service/server';
import NotConnected from '../../components/NotConnected';
import Loading from '../../components/Loading/Loading';

const backgroundImage = require('../../assets/images/background.png');

const logo = require('../../assets/images/logo.png');

const AnimatedIcon = Animated.createAnimatedComponent(AntDesign);

export default function Welcome(props) {
  const {navigation} = props;

  const [post, setPost] = React.useState(null);
  const [requestStatus, setRequestStatus] = React.useState('IDLE');

  const netInfo = useNetInfo();

  const mounted = React.useRef(true);

  const goTo = (place) => {
    navigation.navigate(place);
  };

  const getPost = async () => {
    try {
      if (netInfo.isConnected) {
        setRequestStatus('LOADING');
        const response = await server.getMostLiked();
        if (response.data.success) {
          const {data} = response.data;
          setPost(data);
          setRequestStatus('SUCCESS');
        } else {
          setRequestStatus('ERROR');
        }
      }
    } catch (error) {
      console.log(error);
      setRequestStatus('ERROR');
    }
  };

  React.useEffect(() => {
    getPost();
  }, [netInfo.isConnected]);

  if (!netInfo.isConnected) {
    return <NotConnected />;
  }

  return (
    <>
      {requestStatus === 'LOADING' && <Loading />}
      {requestStatus === 'SUCCESS' && (
        <ImageBackground
          source={backgroundImage}
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
      )}
      {requestStatus === 'ERROR' && (
        <ImageBackground source={backgroundImage} style={styles.imageContainer}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent={true}
          />
          <View style={styles.second}>
            <View style={styles.brandlogo}>
              <View style={styles.logo}>
                <Image source={logo} style={styles.avatar} />
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
      )}
    </>
  );
}
