import React from 'react';
import {View, Text, StatusBar, Image, FlatList, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MasonryList from 'react-native-masonry-list';
import styles from './Home.style';

const avatar = require('../../assets/images/avatar.png');

export default function Home(props) {
  const {navigation} = props;
  const [newPost, setNewPost] = React.useState([
    {
      image: require('../../assets/images/feed_1.png'),
    },
    {
      image: require('../../assets/images/feed_2.png'),
    },
    {
      image: require('../../assets/images/feed_3.png'),
    },
    {
      image: require('../../assets/images/feed_4.png'),
    },
  ]);
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.6}
        onPress={() => navigation.navigate('preview')}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.imageCard} />
        </View>
        <View style={styles.cardInfo}>
          <View style={styles.imageInfo}>
            <Image source={avatar} style={styles.avatar} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Samuel Mothwa</Text>
            <Text style={styles.handle}>@samuel_mothwa</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.header}>
        <Text style={styles.headerText}>Discover</Text>
      </View>
      <View style={styles.suheader}>
        <Text style={styles.subheaderText}>WHAT'S NEW TODAY?</Text>
      </View>
      <FlatList
        horizontal
        data={newPost}
        renderItem={renderItem}
        keyExtractor={(id) => id.toString()}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.browseAll}>
        <Text style={styles.browseAllText}>BROWSE ALL</Text>
      </View>
      <View style={styles.post}>
        <MasonryList
          images={[
            {
              uri:
                'https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg',
            },
            {
              source: {
                uri:
                  'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg',
              },
            },
            {
              uri:
                'https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg',
              dimensions: {width: 1080, height: 1920},
            },
            {
              URI:
                'https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg',
              id: 'blpccx4cn',
            },
            {
              url:
                'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg',
            },
            {
              URL:
                'https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg',
            },
            {
              url:
                'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg',
            },
            {
              URL:
                'https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg',
            },
            {
              url:
                'https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg',
            },
            {
              URL:
                'https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg',
            },
          ]}
        />
      </View>
    </ScrollView>
  );
}
