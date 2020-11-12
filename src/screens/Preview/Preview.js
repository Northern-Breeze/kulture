import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './Preview.style';

const background = require('../../assets/images/full_image_1.png');
const avatar = require('../../assets/images/avatar.png');

export default function Preview(props) {
  const {navigation} = props;
  return (
    <ImageBackground source={background} style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imgContainer}>
          <View>
            <Image source={avatar} style={styles.avatar}/>
          </View>
          <View>
            <Text style={styles.profileName}>Samuel Mothwa</Text>
            <Text style={styles.handler}>@samuel_mothwa</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
          <AntDesign name="close" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
