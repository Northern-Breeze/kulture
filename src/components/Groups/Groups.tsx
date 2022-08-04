import * as React from 'react';
import {View, Text, Pressable} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

import styles from './Groups.styles';

export default function Groups(props) {
  const {name, icon, handleNavigate} = props;

  return (
    <Pressable style={styles.container} onPress={() => {
      handleNavigate(name)
    }}>
      <View style={styles.iconContainer}>
        <Fontisto name={icon} color="#fff" size={20} />
      </View>
      <View style={styles.nameContainer}>
          <Text style={styles.name} numberOfLines={1}>{name}</Text>
      </View>
    </Pressable>
  );
}
