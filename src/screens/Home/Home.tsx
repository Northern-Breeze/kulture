import React from 'react';
import {View} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';

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
  }
}

type User = {
  id: number;
  avatar: string;
  name: string;
}

export default function Home(props: Props) {
  // props
  const {navigation} = props;

  // states
  const [users, setUsers] = React.useState<User[]>([]);
  const [requestStatus, setRequestStatus] = React.useState('LOADING');
  const [loading, setLoadingMore] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [pageEnd, setPageEnd] = React.useState(false);
  const [size] = React.useState(20);

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
      }

      if (response.data.success) {
        const {data} = response.data;
        if (mounted.current) {
          if (data.length === 0) {
            setPageEnd(true);
          } else {
            setUsers([...users, ...data]);
          }
          setRequestStatus('SUCCESS');
        }
      } else {
        if (mounted.current) {
          setRequestStatus('FAILED');
        }
        setRequestStatus('FAILED');
      }
    } catch (error) {
      console.log(error);
      setRequestStatus('FAILED');
    }
  };

  React.useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);


  React.useEffect(() => {
    fetchUsers();
  }, []);


  if (!netinfo.isConnected) {
    return <NotConnected />;
  }

  return (
    <>
      {requestStatus === 'FAILED' && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Button buttonHandler={fetchUsers} buttonText='Error, Reload!' isLoading={loading} />
        </View>
      )}
      {requestStatus === 'EMPTY' && (
        <EmptyList refreshHandler={fetchUsers} />
      )}
      {requestStatus === 'LOADING' && <Loading />}
      {requestStatus === 'SUCCESS' && (
          <UserList
            users={users}
            navigation={navigation}
          />
      )}
    </>
  );
}
