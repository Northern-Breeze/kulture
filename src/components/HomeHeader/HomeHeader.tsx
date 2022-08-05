import * as React from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import  styles from './HomeHeader.style';
import { ICON_SIZE } from './HomeHeader.style';

import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  search: string;
  setSearch(param: string): void;
  handleSearch(param: string): Promise<void>;
}

export default function HomeHeader(props: Props) {
  const {search, setSearch, handleSearch : fnHandleSearch} = props;
  
  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <TextInput
          style={styles.search}
          placeholder="Search for users"
          value={search}
          onChangeText={(val) => {
            setSearch(val)
          }}
        />
        <Pressable onPress={() => {
          fnHandleSearch(search)      
        }} style={styles.searchButton}>
            <Ionicons name="search" color="#fff" size={ICON_SIZE} />
        </Pressable>
      </View>
    </View>
  );
}
