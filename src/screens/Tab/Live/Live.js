import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Video from 'react-native-video';

import styles from './Tab.style';

export default function Live() {
  const [paused, setPaused] = React.useState(true);

  // refs
  const videoRef = React.useRef();

  // Events
  const onBuffer = (buffer) => {
    console.log('buffer: ', buffer);
  };

  const handleError = (error) => {
    console.log('error', error);
  };

  const handleVideoPress = () => {
    setPaused(false);
  };
  
  return (
    <View style={styles.container}>
      <Pressable onPress={handleVideoPress} style={styles.videoContainer}>
        <Video
          poster="https://northernbreeze-bucket.sfo3.digitaloceanspaces.com/android-chrome-512x512.png"
          source={{
            uri:
              'https://northernbreeze-bucket.sfo3.digitaloceanspaces.com/kulture-videos/Nature%20Beautiful%20short%20video%20720p%20HD.mp4',
          }}
          ref={videoRef}
          paused={paused}
          onBuffer={onBuffer}
          onError={handleError}
          style={styles.backgroundVideo}
          repeat
        />
      </Pressable>
    </View>
  );
}
