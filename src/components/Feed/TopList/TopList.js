import React from 'react';
import MasonryList from '@react-native-seoul/masonry-list';

import Item from './Item';

export default function TopList(props) {
  // Props
  const {
    users,
    activeIndex,
    handleLoadMore,
    navigation,
  } = props;
  return (
    <MasonryList
      data={users}
      keyExtractor={(_, index) => index.toString() + Math.random().toString()}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) => {
        return (
          <Item
            item={item}
            index={index}
            activeIndex={activeIndex}
            navigation={navigation}
          />
        );
      }}
      onEndReachedThreshold={0.05}
      onEndReached={handleLoadMore}
    />
  );
}
