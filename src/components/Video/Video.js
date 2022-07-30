import React from 'react';
import {Pressable} from 'react-native';
import Video from 'react-native-video';
import styles from './Video.style';

export default function VideoItem(props) {
  const {video, fullWidth} = props;
  const [paused, setPaused] = React.useState(true);

  // refs
  const videoRef = React.useRef();

  // Events
  const onBuffer = (buffer) => {
    //
  };

  const handleError = (error) => {
    console.log('error', error);
  };

  const handleVideoPress = () => {
    setPaused(false);
  };
  return (
    <>
      <Pressable onPress={handleVideoPress} style={styles.videoContainer}>
        <Video
          poster="https://northernbreeze-bucket.sfo3.digitaloceanspaces.com/android-chrome-512x512.png"
          source={{
            uri: video,
          }}
          ref={videoRef}
          paused={paused}
          onBuffer={onBuffer}
          onError={handleError}
          style={styles.backgroundVideo}
          repeat
        />
      </Pressable>
    </>
  );
}
