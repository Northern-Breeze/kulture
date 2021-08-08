import * as React from 'react';
import {FlatList} from 'react-native';

// Components
import Video from '../../../components/Video/Video';

import styles from './Tab.style';

export default function Live() {
  const [videos, setVideos] = React.useState([
    {
      video:
        'https://northernbreeze-bucket.sfo3.digitaloceanspaces.com/kulture-videos/Nature%20Beautiful%20short%20video%20720p%20HD.mp4',
      isFullWidth: true,
    },
    {
      video:
        'https://northernbreeze-bucket.sfo3.digitaloceanspaces.com/kulture-videos/y2mate.com%20-%20TAKI%20TAKI%20%20DJ%20Snake%20ft%20Ozuna%20Cardi%20B%20Selena%20Gomez%20Dance%20Video%20%20Namit%20Chhajed%20Choreography_1080pFHR.mp4',
      isFullWidth: false,
    },
    {
      video:
        'https://northernbreeze-bucket.sfo3.digitaloceanspaces.com/kulture-videos/y2mate.com%20-%20TAKI%20TAKI%20%20DJ%20Snake%20ft%20Ozuna%20Cardi%20B%20Selena%20Gomez%20Dance%20Video%20%20Namit%20Chhajed%20Choreography_1080pFHR.mp4',
      isFullWidth: false,
    },
    {
      video:
        'https://northernbreeze-bucket.sfo3.digitaloceanspaces.com/kulture-videos/y2mate.com%20-%20TAKI%20TAKI%20%20DJ%20Snake%20ft%20Ozuna%20Cardi%20B%20Selena%20Gomez%20Dance%20Video%20%20Namit%20Chhajed%20Choreography_1080pFHR.mp4',
      isFullWidth: true,
    },
    {
      video:
        'https://northernbreeze-bucket.sfo3.digitaloceanspaces.com/kulture-videos/y2mate.com%20-%20TAKI%20TAKI%20%20DJ%20Snake%20ft%20Ozuna%20Cardi%20B%20Selena%20Gomez%20Dance%20Video%20%20Namit%20Chhajed%20Choreography_1080pFHR.mp4',
      isFullWidth: false,
    },
    {
      video:
        'https://northernbreeze-bucket.sfo3.digitaloceanspaces.com/kulture-videos/y2mate.com%20-%20TAKI%20TAKI%20%20DJ%20Snake%20ft%20Ozuna%20Cardi%20B%20Selena%20Gomez%20Dance%20Video%20%20Namit%20Chhajed%20Choreography_1080pFHR.mp4',
      isFullWidth: false,
    },
  ]);
  return (
    <>
      <FlatList
        data={videos}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'flex-start',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
              <Video video={item.video} fullWidth={item.isFullWidth} />
          )
        }}
      />
    </>
  );
}
