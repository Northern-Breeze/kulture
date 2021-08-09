import * as React from 'react';
import {View, Text, Image} from 'react-native';
import Loading from '../../../components/Loading';
import Snackbar from 'react-native-snackbar';

import server from '../../../service/server';

import styles from './ProfileView.style';


export default function ProfileView(props) {
  // props
  const {route} = props;
  const {userId} = route.params;
  // state
  const [requestStatus, setRequestStatus] = React.useState('LOADING');
  const [profile, setProfile] = React.useState(null);
  // REF
  const mounted = React.useRef(true);

  const fetchProfile = async () => {
    try {
      setRequestStatus('LOADING');
      const response = await server.getProfileAccount({userId: userId});
      if (response.status === 401) {
        setRequestStatus('FAILED');
      }
      if (response.data.success) {
        const {data} = response.data;
        if (mounted.current) {
          setProfile(data);
          setRequestStatus('SUCCESS');
        }
      } else {
        Snackbar.show({
          text: response.data.message,
          duration: Snackbar.LENGTH_SHORT,
        });
        if (mounted.current) {
          setRequestStatus('FAILED');
        }
        setRequestStatus('FAILED');
      }
    } catch (error) {
      console.log('error: ', error);
      Snackbar.show({
        text: 'Something went wrong',
        duration: Snackbar.LENGTH_SHORT,
      });
      setRequestStatus('FAILED');
    }
  };

  React.useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <>
      {requestStatus === 'LOADING' && <Loading />}
      {requestStatus === 'FAILED' && (
        <View>
          <Text>FAILED</Text>
        </View>
      )}
      {requestStatus === 'SUCCESS' && (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: profile.profile }} style={styles.profile} />
            </View>
        </View>
      )}
    </>
  );
}
