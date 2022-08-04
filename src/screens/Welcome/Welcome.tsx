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

import styles from './Welcome.style';

import NotConnected from '../../components/NotConnected';

const backgroundImage = require('../../assets/images/background.png');

const logo = require('../../assets/images/logo.png');

type Props = {
  navigation: {
    navigate(param: string): void;
  };
};

export default function Welcome(props: Props) {
  const {navigation} = props;

  const [post, setPost] = React.useState(null);
  const [requestStatus, setRequestStatus] = React.useState('IDLE');

  const netInfo = useNetInfo();

  const goTo = (place: string) => {
    navigation.navigate(place);
  };

  if (!netInfo.isConnected) {
    return <NotConnected />;
  }

  return (
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
  );
}
