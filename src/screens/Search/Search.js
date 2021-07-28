import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import SnackBar from 'react-native-snackbar';
import server from '../../service/server';
import styles from './Search.style';
import { useNetInfo } from '@react-native-community/netinfo';
import NotConnected from '../../components/NotConnected';


export default function Search(props) {
  const {navigation} = props;
  const [search, setSearch] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [posts, setPost] = React.useState([]);

  const mounted = React.useRef(true);
  const netinfo = useNetInfo();
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await server.getAllPost();

      if (response.status === 401) {
        navigation.navigate('signin');
      }
      if (response.data.success) {
        const {data} = response.data;
        if (mounted.current) {
          setPost(data);
          setLoading(false);
        }
      } else {
        SnackBar.show({
          text: response.data.message,
          duration: SnackBar.LENGTH_SHORT,
        });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      SnackBar.show({
        text: 'Something went wrong, please try again',
        duration: SnackBar.LENGTH_SHORT,
      });
      setLoading(false);
    }
  };

  const Item = ({image}) => {
    return (
      <TouchableOpacity>
        <Image source={{uri: image}} style={styles.image} />
      </TouchableOpacity>
    );
  };
  const renderFeed = ({item}) => <Item image={item.image} />;

  const filterImages = posts.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });

  React.useEffect(() => {
    fetchPosts();
  }, []);

  React.useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);
  

  if (!netinfo.isConnected) {
    return <NotConnected />;
  }

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
        {loading && <Text>Loading ...</Text>}
        {!loading && (
          <FlatList
            numColumns={2}
            columnWrapperStyle={styles.images}
            data={posts}
            renderItem={renderFeed}
            keyExtractor={(item) => item.postId}
          />
        )}
      </View>
    </View>
  );
}
