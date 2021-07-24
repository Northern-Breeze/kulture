import * as React from 'react';
import {TouchableOpacity, Image, ImageBackground} from 'react-native';
import styles from './Item.style';

import server from '../../../../service/server';

export default function Item(props) {
  // Props
  const {item, index, activeIndex} = props;

  // Refs
  const mounted = React.useRef(true);
  const liked = React.useRef(false);

  React.useEffect(() => {
    if (index === activeIndex) {
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
        <Image source={{uri: item.image}} style={styles.fullImage} />
      </ImageBackground>
    </TouchableOpacity>
  );
}
