import * as React from 'react';
import {View, Text, TouchableOpacity, Image, Platform} from 'react-native';
import {showMessage} from 'react-native-flash-message';

import styles from './SubmitImage.style';
import Loading from '../../../components/Loading';
import server from '../../../service/server';

type FileSelect = {
  base64?: string;
  uri?: string;
  width?: number;
  height?: number;
  fileSize?: number;
  type?: string;
  fileName?: string;
  duration?: number;
  bitrate?: number;
  timestamp?: string;
  id?: string;
};

type Props = {
  navigation: {
    navigate(param: string): void;
    goBack(): void;
  };
  route: {
    params: {
      file: FileSelect;
      pickerType?: string
    };
  };
};

export default function SubmitImage(props: Props) {
  const {navigation, route} = props;
  const {uri, base64, fileName} = route.params.file;
  const {pickerType} =  route.params;
  const [SERVER_STATUS, setRequestStatus] = React.useState('IDLE');


  const uploadToServer = async () => {
    try {
      if (typeof uri === 'undefined') {
        showMessage({
          message: 'Please upload an image',
          type: 'danger',
        });
        return;
      }
      setRequestStatus('LOADING');

      if (pickerType === 'Profile') {
        const response = await server.updateProfileImage({ file: base64 || '', name: fileName || '' });
            
        if (response.data.success) {
          showMessage({
            message: response.data.message,
            type: 'success',
          });
          setRequestStatus('IDLE');
          navigation.navigate('Profile');
        } else {
          showMessage({
            message: response.data.message,
            type: 'danger',
          });
          setRequestStatus('IDLE');
        }

      } else {

        const response = await server.addPost({ title: 'POST', file: base64 || '', name: fileName || '' });
       
        if (response.data.success) {
          showMessage({
            message: response.data.message,
            type: 'success',
          });
          setRequestStatus('IDLE');
          navigation.goBack();
        } else {
          showMessage({
            message: response.data.message,
            type: 'danger',
          });
          setRequestStatus('IDLE');
        }
      }

    } catch (error) {
      console.log(error);
      showMessage({
        message: 'Something went wrong, please try again',
        type: 'danger',
      });
      setRequestStatus('IDLE');
    }
  };
  return (
    <View style={styles.container}>
      {SERVER_STATUS === 'LOADING' && <Loading />}
      {SERVER_STATUS === 'IDLE' && (
        <>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: uri}}
              style={styles.placeholder}
              resizeMode="cover"
            />
          </View>
          <View style={styles.inputs}>
            <TouchableOpacity style={styles.button} onPress={uploadToServer}>
              <Text style={styles.actions}>{pickerType === 'Profile' ? 'Update Profile': 'Upload Post'}</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}
