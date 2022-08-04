import React from 'react';
<<<<<<< HEAD
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
=======
import {FlatList, Dimensions} from 'react-native';
import Footer from '../Footer';

import Item from './Item';

const {width} = Dimensions.get('screen');

export default function TopList(props) {
  // Props
  const {posts, topRef, scrollToActiveIndex, activeIndex, handleLoadMore, navigation} = props;
  return (
    <FlatList
      ref={topRef}
      data={posts}
      keyExtractor={(_, index) => index.toString() + Math.random().toString()}
      horizontal
      pagingEnabled
      ListFooterComponent={<Footer />}
      onEndReached={handleLoadMore}
      showsHorizontalScrollIndicator={false}
      onEndReachedThreshold={0.05}
      initialNumToRender={6}
      onMomentumScrollEnd={(ev) => {
        scrollToActiveIndex(
          Math.floor(
            Math.floor(ev.nativeEvent.contentOffset.x) / Math.floor(width),
          ),
        );
      }}
      renderItem={({item, index}) => {
        return <Item item={item} index={index} activeIndex={activeIndex} navigation={navigation}/>;
      }}
>>>>>>> development
    />
  );
}
