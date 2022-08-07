import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import SnackBar from 'react-native-snackbar';
import HeaderList from './HeaderList';
import Loading from '../../components/Loading/Loading';
import LoadingPlaceHolder from '../../components/LoadingPlaceHolder';
import Button from '../../components/common/Button';

import styles from './Preview.style';

import server from '../../service/server';
import {isOdd} from '../../helper/isOdd';
import ListEmpty from '../../components/ListEmpty';

type Props = {
  navigation: any;
  route: {
    params: {
      avatar: string;
      username: string;
      userId: number;
      image: string;
    };
  };
};

export default function Preview(props: Props) {
  const {navigation, route} = props;
  const {avatar, username, image, userId} = route.params;
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [visible, setVisible] = React.useState(false);
  const [requestStatus, setRequestStatus] = React.useState('LOADING');
  const [posts, setPost] = React.useState<{asset: string}[]>([
    {asset: '1'},
    {asset: '2'},
    {asset: '3'},
    {asset: '4'},
  ]);

  const fetchPost = async () => {
    try {
      setRequestStatus('LOADING');
      const response = await server.getUserPost({userId});
      if (response.data.success) {
        const {data: postData} = response.data;

        if (!isOdd(postData) && postData.length > 0) {
          const tempPost = {
            postId: Math.random(),
            image: 'https://via.placeholder.com/300/09f.png/fff',
            title: 'Placeholder',
          };
          const data = [...postData, tempPost];
          setPost(data);
        } else {
          setPost(postData);
        }
        console.log(posts);
        setLoading(false);
        setRequestStatus('SUCCESS');
      } else {
        SnackBar.show({
          text: response.data.message,
          duration: SnackBar.LENGTH_SHORT,
        });
        setRequestStatus('FAILED');
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setRequestStatus('FAILED');
    }
  };

  React.useEffect(() => {
    fetchPost();
  }, []);

  const Item: React.FC<any> = ({image}: {image: string}): JSX.Element => {
    return (
      <React.Fragment>
        <TouchableOpacity>
          <Image source={{uri: image}} style={styles.image} />
        </TouchableOpacity>
      </React.Fragment>
    );
  };

  const renderFeed = ({item}: {item: {asset: string}}) => {
    return <Item image={item.asset} />;
  };

  const loadingItems = () => {
    return <LoadingPlaceHolder />;
  };

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle="dark-content"
        showHideTransition="fade"
        hidden={false}
      />
      {requestStatus === 'FAILED' && (
        <View style={styles.errorContainer}>
          <View style={styles.errorContainerInfo}>
            <Text style={styles.errorContainerText}>
              Something went wrong please try agin later
            </Text>
          </View>
          <Button
            buttonHandler={fetchPost}
            buttonText="Reload"
            isLoading={loading}
          />
        </View>
      )}
      {requestStatus === 'LOADING' && <Loading />}
      {requestStatus === 'SUCCESS' && (
        <View>
          <FlatList
            ListHeaderComponent={
              <HeaderList
                loading={loading}
                data={{avatar, username, image, userId}}
                navigation={navigation}
              />
            }
            ListEmptyComponent={<ListEmpty username={username} />}
            numColumns={2}
            columnWrapperStyle={styles.container}
            data={posts}
            renderItem={loading ? loadingItems : renderFeed}
            keyExtractor={(item, index) => 'key-' + index}
          />
        </View>
      )}
    </View>
  );
}
