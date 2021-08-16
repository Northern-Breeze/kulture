import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  Pressable
} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import Snackbar from 'react-native-snackbar';

// functions
import server from '../../service/server';

// styles
import styles from './Search.style';

// components
import NotConnected from '../../components/NotConnected';
import ActionsSheet from '../../components/ActionSheets/UserAction';

export default function Search(props) {
  // props
  const {navigation} = props;
  
  // state
  const [search, setSearch] = React.useState('');
  const [users, setUsers] = React.useState([]);
  const [requestStatus, setRequestStatus] = React.useState('IDLE');
  const [username, setUsername] = React.useState('');

  // ref
  const mounted = React.useRef(true);
  const actionSheetRef = React.useRef();

  const netinfo = useNetInfo();

  const fetchUsers = async (name) => {
    try {
      const response = await server.searchUsers({name: name});
      if (response.status === 401) {
        setRequestStatus('FAILED');
      }
      if (response.data.success) {
        const { data } = response.data
        setUsers(data);
        setRequestStatus('SUCCESS');
      }
    } catch (error) {
      console.log(error);
      Snackbar.show({
        text: 'Something went wrong',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  };

  const profilePress = (username) => {
    actionSheetRef.current?.setModalVisible();
    setUsername(username)
  }

  const handleSearch = async (data) => {
    setSearch(data);
    await fetchUsers(data);
  }

  const Item = ({image, username}) => {
    return (
      <Pressable onPress={() => {
        profilePress(username);
      }}>
        <Image source={{uri: image}} style={styles.image} />
      </Pressable>
    );
  };

  const renderFeed = ({item}) => <Item image={item.profile} username={item.username}/>;

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
          placeholder="Search for users"
          value={search}
          onChangeText={handleSearch}
        />
      </View>
      <View style={styles.resultsContainer}>
        {requestStatus === 'SUCCESS' && (
          <FlatList
            numColumns={2}
            columnWrapperStyle={styles.images}
            data={users}
            renderItem={renderFeed}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
      <ActionsSheet  
        username={username}
        actionSheetRef={actionSheetRef}
      />
    </View>
  );
}
