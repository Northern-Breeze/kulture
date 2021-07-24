import React from 'react';
import {View, FlatList, TouchableOpacity, Image, Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('screen');


export default function TopList(props) {
  const {posts, topRef, scrollToActiveIndex} = props;
  return (
    <View>
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
        renderItem={({item}) => {
          return (
            <TouchableOpacity activeOpacity={0.9}>
              <Image
                source={{uri: item.image}}
                style={{width: wp(100), height: hp(100)}}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
