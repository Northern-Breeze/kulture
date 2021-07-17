import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import ImagePicker from '../../components/ActionSheets/ImagePicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';

import styles from './AddPost.style';

// helpers
import { configs } from '../../config/config';

export default function AddPost() {
  const [title, setTitle] = React.useState('');
  const actionSheetRef = React.useRef(true);

  const createPost = () => {
    actionSheetRef.current?.setModalVisible();
  };

  const createFormData = (file, body) => {
    const data = new FormData();

    data.append('picture', {
      name: file.fileName,
      type: file.type,
      uri:
        Platform.OS === 'android' ? file.uri : file.uri.replace('file://', ''),
    });

    Object.keys(body).forEach((key) => {
      data.append(key, body[key]);
    });

    return data;
  };

  const uploadToServer = async (file, body) => {
    try {
      if (typeof file === 'undefined') {
        Snackbar.show({
          text: 'Please Upload A File',
          duration: Snackbar.LENGTH_SHORT,
        });
        return;
      }
      const token = (await AsyncStorage.getItem('token')) || '';
      const request = await fetch(
        `${configs.SERVER_URL}/api/v1/post/add`,
        {
          body: createFormData(file, {title}),
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

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Add Post</Text>
      </View>
      <View style={styles.inputs}>
        <View style={styles.tagHeader}>
          <Text style={styles.tags}>Tags</Text>
        </View>
        <View>
          <TextInput
            placeholder="Title"
            value={title}
            style={styles.input}
            onChangeText={(val) => {
              setTitle(val);
            }}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              createPost();
            }}>
            <Text style={styles.actions}>Select or Take a picture</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ImagePicker
        actionSheetRef={actionSheetRef}
        uploadToServer={uploadToServer}
      />
    </View>
  );
}
