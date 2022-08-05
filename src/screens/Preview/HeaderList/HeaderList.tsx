import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styles from './Header.style';

//Components

type Props = {
  loading: boolean;
  data: any;
  navigation: any;
};
export default function HeaderList(props: Props) {
  const {loading, data, navigation} = props;

  const handleFollow = () => {
    
  };

  return (
    <>
      <View style={styles.avatarContainer}>
        <TouchableOpacity activeOpacity={0.7}>
          {data !== null && (
            <Image source={{uri: data.avatar}} style={styles.avatar} />
          )}
          {loading && data === null && (
            <SkeletonPlaceholder>
              <View style={styles.avatar} />
            </SkeletonPlaceholder>
          )}
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.usernameContainer}>
          {loading && (
            <SkeletonPlaceholder
              // @ts-ignore
              style={styles.loadingName}></SkeletonPlaceholder>
          )}
          {!loading && data !== null && (
            <Text style={styles.username}>{data.username}</Text>
          )}
        </View>
        <View style={styles.locationContainer}>
          <Text>South Africa, Polokwane</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.button}
          disabled={loading}
          onPress={handleFollow}>
          <Text style={styles.buttonTextAdd}>Follow - {data.username}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
