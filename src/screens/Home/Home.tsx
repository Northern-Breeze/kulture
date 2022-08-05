import React from 'react';
import {View, StatusBar} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import { showMessage } from 'react-native-flash-message';
import server from '../../service/server';

// Components
import UserList from '../../components/Feed/TopList';
import EmptyList from '../../components/EmptyList';
import NotConnected from '../../components/NotConnected';
import Loading from '../../components/Loading';
import Button from '../../components/common/Button';

type Props = {
  navigation: {
    navigate: () => void;
  };
};

type User = {
  id: number;
  avatar: string;
  name: string;
};

export default function Home(props: Props) {
  // props
  const {navigation} = props;

  // states
  const [users, setUsers] = React.useState<User[]>([]);
  const [requestStatus, setRequestStatus] = React.useState('LOADING');
  const [loading, setLoadingMore] = React.useState(false);

  // Search state
  const [search, setSearch] = React.useState('');


  // hooks
  const netinfo = useNetInfo();

  // Refs
  const mounted = React.useRef(true);

  const fetchUsers = async () => {
    try {
      setRequestStatus('LOADING');
      const response = await server.getAllUsers();

      // UnAuthorize
      if (response.status === 401) {
        setRequestStatus('FAILED');
        showMessage({
          message: 'Something went wrong please try again later',
          type: 'danger'
        })
      }

      if (response.data.success) {
        const {data} = response.data;
          setUsers(data);
          setRequestStatus('SUCCESS');
      } else {
        setRequestStatus('FAILED');
      }
    } catch (error) {
      console.log(error);
      setRequestStatus('FAILED');
      showMessage({
        message: 'Something went wrong please try again later',
        type: 'danger'
      })
    }
  };

  React.useEffect(() => {
    if (mounted.current) {
      fetchUsers();
    }
    return () => {
      mounted.current = false;
    };
  }, []);

  if (!netinfo.isConnected) {
    return <NotConnected />;
  }

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle="dark-content"
        showHideTransition="fade"
        hidden={false}
      />
      {requestStatus === 'FAILED' && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Button
            buttonHandler={fetchUsers}
            buttonText="Error, Reload!"
            isLoading={loading}
          />
        </View>
      )}
      {requestStatus === 'EMPTY' && <EmptyList refreshHandler={fetchUsers} />}
      {requestStatus === 'LOADING' && <Loading />}
      {requestStatus === 'SUCCESS' && (
          <UserList
            users={users}
            search={search}
            setSearch={setSearch}
            navigation={navigation}
          />
      )}
    </>
  );
}
