import * as React from 'react';
import {
  TouchableOpacity,
  Image,
  ImageBackground,
  View,
  Text,
  Pressable,
} from 'react-native';
import styles from './Item.style';

import server from '../../../../service/server';

export default function Item(props) {
  // Props
  const {item, index, activeIndex, navigation} = props;

  // Refs
  const mounted = React.useRef(true);
  const liked = React.useRef(false);

  const handleProfilePress = () => {
    navigation.navigate('Profile');
  }
  const handlePostPress = () => {
    navigation.navigate('Preview', { username: item.username, avatar: item.avatar, image: item.image, userId: item.userId });
  }
  React.useEffect(() => {
    if (index === activeIndex) {
      if (typeof item.postId !== 'undefined') {
        setTimeout(() => {
          if (!liked.current) {
            liked.current = true;
          }
        }, 8000);
      }
    }
  }, [activeIndex]);

  React.useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);

  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.container} onPress={handlePostPress}>
      <ImageBackground
        source={{uri: item.image}}
        style={styles.backgroundImage}
        blurRadius={80}>
        <View style={styles.nameContainer}>
          <Pressable style={styles.usernameContainer} onPress={handleProfilePress}>
            <Image source={{uri: item.avatar}} style={styles.avatar} />
          </Pressable>
          <View
            style={styles.tagContainer}>
            <Pressable
              style={styles.tag}>
              <Text style={styles.tagText}>
                @{item.username}
              </Text>
            </Pressable>
          </View>
        </View>
        <Image source={{uri: item.image}} style={styles.fullImage} />
      </ImageBackground>
    </TouchableOpacity>
  );
}
