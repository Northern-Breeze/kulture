import React from 'react';
import MasonryList from '@react-native-seoul/masonry-list';

import Item from './Item';
import ListEmpty from '../../ListEmpty';

type Props = {
  users: {
    avatar: string;
    name: string;
    id: number;
  }[];
  navigation: {
    navigate: () => void;
  };
};

export default function TopList(props: Props) {
  // Props
  const {users, navigation} = props;
  return (
    <MasonryList
      data={users}
      keyExtractor={(_, index) => index.toString() + Math.random().toString()}
      numColumns={2}
      ListEmptyComponent={<ListEmpty />}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <Item
            item={item}
            navigation={navigation}
          />
        );
      }}
      onEndReachedThreshold={0.05}
    />
  );
}