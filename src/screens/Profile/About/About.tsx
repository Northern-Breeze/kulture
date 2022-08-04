import * as React from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';

import styles from './About.styles';

export default function About() {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle="dark-content"
        showHideTransition="fade"
        hidden={false}
      />
      <View style={styles.header}>
        <Text style={styles.headerText}>About Kulture</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>
          Kulture is a social media app where you can find and follow users.
          Create a post and share with your friends. Social media does not get
          exciting as this
        </Text>
        <Text style={styles.contentText}>
          With Kulture you can become who you what to be and express yourself freely
        </Text>
      </View>
    </View>
  );
}
