import React from 'react';
import {FlatList, Dimensions} from 'react-native';
import Footer from '../Footer';

import Item from './Item';

const {width} = Dimensions.get('screen');

export default function TopList(props) {
  // Props
  const {posts, topRef, scrollToActiveIndex, activeIndex, handleLoadMore} = props;
  return (
    <FlatList
      ref={topRef}
      data={posts}
      keyExtractor={(_, index) => index.toString()}
      horizontal
      pagingEnabled
      ListFooterComponent={<Footer />}
      onEndReached={handleLoadMore}
      showsHorizontalScrollIndicator={false}
      onEndReachedThreshold={0.5}
      initialNumToRender={6}
      onMomentumScrollEnd={(ev) => {
        scrollToActiveIndex(
          Math.floor(
            Math.floor(ev.nativeEvent.contentOffset.x) / Math.floor(width),
          ),
        );
      }}
      renderItem={({item, index}) => {
        return <Item item={item} index={index} activeIndex={activeIndex} />;
      }}
    />
  );
}
