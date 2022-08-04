import { Platform } from 'react-native';
import Snackbar from 'react-native-snackbar';
import {configs} from '../config/config';

import AsyncStorage from '@react-native-async-storage/async-storage';

const createFormData = (file) => {
    const data = new FormData();

    data.append('picture', {
      name: file.fileName,
      type: file.type,
      uri:
        Platform.OS === 'android' ? file.uri : file.uri.replace('file://', ''),
    });

    return data;
};

const uploadToServer = async (image) => {
    try {
        console.log(image);
      if (typeof image === 'undefined' || image === '') {
        Snackbar.show({
          text: 'Please Upload A File',
          duration: Snackbar.LENGTH_SHORT,
        });
        return;
      }
      const token = (await AsyncStorage.getItem('token')) || '';
      const request = await fetch(
        `${configs.SERVER_URL}/api/v1/profile/update-image`,
        {
          body: createFormData(image),
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const response = await request.json();
      if (response.status === 200) {
        if (response.success) {
          Snackbar.show({
            text: response.message,
            duration: Snackbar.LENGTH_SHORT,
          });
          actionSheetRef.current?.hide();
          fetchProfile();
        } else {
          Snackbar.show({
            text: response.message,
            duration: Snackbar.LENGTH_SHORT,
          });
        }
      } else {
        Snackbar.show({
          text: response.message,
          duration: Snackbar.LENGTH_SHORT,
        });
      }
    } catch (error) {
      console.log(error);
      Snackbar.show({
        text: 'Something went wrong, please try again',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  };

  export default uploadToServer;