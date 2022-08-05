import * as React from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import  styles from './HomeHeader.style';
import { ICON_SIZE } from './HomeHeader.style';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeHeader() {
  const [search, setSearch] = React.useState('');

  const handleSearch = (val: string) => {
    setSearch(val);
  }
    const handleFind = () => {
        
    }
  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <TextInput
          style={styles.search}
          placeholder="Search for users"
          value={search}
          onChangeText={handleSearch}
        />
        <Pressable onPress={handleFind} style={styles.searchButton}>
            <Ionicons name="search" color="#fff" size={ICON_SIZE} />
        </Pressable>
      </View>
    </View>
  );
}
