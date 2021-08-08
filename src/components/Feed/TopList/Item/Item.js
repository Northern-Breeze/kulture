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
  const {item, index, activeIndex} = props;

  // Refs
  const mounted = React.useRef(true);
  const liked = React.useRef(false);

  React.useEffect(() => {
    console.log(item.avatar);
    if (index === activeIndex) {
      if (typeof item.postId !== 'undefined') {
        setTimeout(() => {
          if (!liked.current) {
            liked.current = true;
            server
              .likeAPost({
                postId: item.postId,
              })
              .then()
              .catch((error) => {
                console.log(error);
              });
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
    <TouchableOpacity activeOpacity={0.9} style={styles.container}>
      <ImageBackground
        source={{uri: item.image}}
        style={styles.backgroundImage}
        blurRadius={80}>
        <View style={styles.nameContainer}>
          <Pressable style={styles.usernameContainer}>
            <Image source={{uri: item.avatar}} style={styles.avatar} />
          </Pressable>
          <View
            style={styles.tagContainer}>
            <Pressable
              style={styles.tag}>
              <Text style={styles.tagText}>
                #summer_time
              </Text>
            </Pressable>
            <Pressable
              style={styles.tag}>
              <Text style={styles.tagText}>
                #alway_there
              </Text>
            </Pressable>
            <Pressable
              style={styles.tag}>
              <Text style={styles.tagText}>
                #finally
              </Text>
            </Pressable>
          </View>
        </View>
        <Image source={{uri: item.image}} style={styles.fullImage} />
      </ImageBackground>
    </TouchableOpacity>
  );
}
