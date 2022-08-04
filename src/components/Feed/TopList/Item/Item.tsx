import * as React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import styles from './Item.style';

type Props = {
  item: {
    name: string;
    avatar: string;
    username: string;
    id: number;
    image: string;
  };
  navigation: {
    navigate: (location: string, param: any) => void
  };
};

export default function Item(props: Props) {
  // Props
  const {item, navigation} = props;

  const randomBool = React.useMemo(() => Math.random() < 0.5, []);

  // Refs
  const mounted = React.useRef(true);

  const handlePostPress = () => {
    navigation.navigate('Preview', {
      username: item.name,
      avatar: item.avatar,
      userId: item.id,
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
