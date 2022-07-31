import * as React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import styles from './Item.style';

export default function Item(props) {
  // Props
  const {item, navigation} = props;

  const randomBool = React.useMemo(() => Math.random() < 0.5, []);

  // Refs
  const mounted = React.useRef(true);

  const handlePostPress = () => {
    navigation.navigate('Preview', {
      username: item.username,
      avatar: item.avatar,
      image: item.image,
      userId: item.userId,
    });
  };

  React.useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.container}
      onPress={handlePostPress}>
      <Image
        source={{uri: item.avatar}}
        style={[styles.fullImage, {height: randomBool ? 150 : 280}]}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
}
