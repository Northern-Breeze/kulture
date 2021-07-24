import React from 'react';
import {FlatList, Dimensions} from 'react-native';

import Item from './Item';

const {width} = Dimensions.get('screen');

export default function TopList(props) {
  // Props
  const {posts, topRef, scrollToActiveIndex, activeIndex} = props;
  // const  onViewableItemsChanged = ({ viewableItems, changed }) => {
  //   console.log("Visible items are", viewableItems);
  //   console.log("Changed in this iteration", changed);
  // }
  return (
    <FlatList
      ref={topRef}
      data={posts}
      keyExtractor={(item) => item.postId.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
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
