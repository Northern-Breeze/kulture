import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from './Search.style';

export default function Search() {
  const [search, setSearch] = React.useState('');
  const [data] = React.useState([
    {
      id: 1,
      name: 'Samuel',
      image: 'https://picsum.photos/200/300?random=1',
    },
    {
      id: 2,
      name: 'Micheal',
      image: 'https://picsum.photos/200/300?random=2',
    },
    {
      id: 3,
      name: 'Rodney',
      image: 'https://picsum.photos/200/300?random=3',
    },
    {
      id: 4,
      name: 'Lebohnag',
      image: 'https://picsum.photos/200/300?random=4',
    },
    {
      id: 5,
      name: 'Marry',
      image: 'https://picsum.photos/200/300?random=5',
    },
    {
      id: 6,
      name: 'Phillip',
      image: 'https://picsum.photos/200/300?random=6',
    },
    {
      id: 7,
      name: 'Simpsons',
      image: 'https://picsum.photos/200/300?random=7',
    },
    {
      id: 8,
      name: 'Franklin',
      image: 'https://picsum.photos/200/300?random=8',
    },
  ]);
  const Item = ({image}) => {
    return (
      <TouchableOpacity>
        <Image source={{uri: image}} style={styles.image} />
      </TouchableOpacity>
    );
  };
  const renderFeed = ({item}) => <Item image={item.image} />;
  const filterImages = data.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Search</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.search}
          placeholder="Search for users and tags"
          value={search}
          onChangeText={(text) => {
            setSearch(text);
          }}
        />
      </View>
      <View style={styles.resultsText}>
        <Text style={styles.results}>All Results</Text>
      </View>
      <View style={styles.resultsContainer}>
        <FlatList
          numColumns={2}
          columnWrapperStyle={styles.images}
          data={filterImages}
          renderItem={renderFeed}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}
