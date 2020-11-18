import React from 'react';
import {View, Text, TextInput, FlatList, Image} from 'react-native';
import styles from './Search.style';

const picsumImages = new Array(11).fill('http://placeimg.com/640/360/any');

export default function Search() {
  const numColumns = 2;
  const [images, setImages] = React.useState(picsumImages);
  const [data, setData] = React.useState([
    {
      id: 1,
      name: 'dog',
      image: 'http://placeimg.com/640/360/any',
    },
    {
      id: 2,
      name: 'dog',
      image: 'http://placeimg.com/640/360/any',
    },
    {
      id: 3,
      name: 'book',
      image: 'http://placeimg.com/640/360/any',
    },
    {
      id: 4,
      name: 'man',
      image: 'http://placeimg.com/640/360/any',
    },
    {
      id: 5,
      name: 'mom',
      image: 'http://placeimg.com/640/360/any',
    },
    {
      id: 6,
      name: 'born',
      image: 'http://placeimg.com/640/360/any',
    },
    {
      id: 7,
      name: 'bounce',
      image: 'http://placeimg.com/640/360/any',
    },
  ]);
  const renderItem = ({item}) => {
    const {image, id, name} = item;
    return (
      <Image
        source={{uri: item}}
        style={{aspectRatio: 1, flex: 1 / numColumns, margin: 5}}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Search</Text>
      </View>
      <View style={styles.searhBoxContainer}>
        <TextInput style={styles.searchBox} placeholder="Search All Photos" />
      </View>
      <View style={styles.showAll}>
        <Text style={styles.showAllText}>ALL RESULTS</Text>
      </View>
      <FlatList data={images} renderItem={renderItem} numColumns={3} />
    </View>
  );
}
