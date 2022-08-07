import * as React from 'react';
import {View, Text} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import {showMessage} from 'react-native-flash-message';
import { useStoreState, State, useStoreActions, Actions } from 'easy-peasy';

// functions
import server from '../../service/server';
import { Model } from '../../store/model';

// styles
import styles from './Notification.style';

// components
import NotConnected from '../../components/NotConnected';
import {FlatList} from 'react-native-gesture-handler';
import NotificationItem from '../../components/NotificationItem';
import EmptyNotifications from '../../components/EmptyNotifications';
import Loading from '../../components/Loading';

type Props = {
  navigation: {
    navigate(param: string): void;
  };
};

type SERVER_STATUS_TYPE = 'LOADING' | 'IDLE' | 'SUCCESS' | 'FAILED';

export default function Search(props: Props) {
  // props
  const {navigation} = props;
  //state
  const [SERVER_STATUS, setServerStatus] =
    React.useState<SERVER_STATUS_TYPE>('IDLE');

  // ref
  const mounted = React.useRef(true);


  // hooks
  const netinfo = useNetInfo();
  const notifications = useStoreState((state: State<Model>) => state.notifications);
  const setNotifications = useStoreActions((action: Actions<Model>) => action.addNotifications);
  const resetUnSeenNotifications = useStoreActions((action: Actions<Model>) => action.resetUnSeenNotifications);

  const fetchNotifications = async () => {
    try {
      setServerStatus('LOADING');
      const response = await server.getNotifications();
      if (response.data.success) {
        setNotifications(response.data.data);
        showMessage({
          message: response.data.message,
          type: 'success',
        });
        setServerStatus('SUCCESS');
      } else {
        showMessage({
          message: response.data.message,
          type: 'danger',
        });
        setServerStatus('FAILED');
      }
    } catch (error) {
      console.log(error);
      setServerStatus('FAILED');
      showMessage({
        message: 'Something went wrong please try again later',
      });
    }
  };

  React.useEffect(() => {
    if (mounted.current) {
      fetchNotifications();
    }
    return () => {
      mounted.current = false;
    };
  }, []);

  React.useEffect(() => {
    resetUnSeenNotifications();
  },[])

  if (!netinfo.isConnected) {
    return <NotConnected />;
  }

  return (
    <View style={styles.container}>
      {SERVER_STATUS === 'LOADING' && (
        <View style={styles.placeholder}>
          <Loading />
        </View>
      )}
      {SERVER_STATUS === 'FAILED' && (
        <View>
          <View><Text>Request Failed</Text></View>
        </View>
      )}
      {SERVER_STATUS === 'SUCCESS' && (
          <View>
            <FlatList
              data={notifications}
              ListEmptyComponent={<EmptyNotifications />}
              renderItem={({ item }) => (<NotificationItem item={item} />)}
              keyExtractor={(_, index) => 'key-' + index}
            />
          </View>
      )}
    </View>
  );
}
