import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './Profile.style';

export default function Header(props) {
    const {loading, data} = props;
  return (
    <>
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
    </>
  );
}
