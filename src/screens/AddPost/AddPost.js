import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import ImagePicker from '../../components/ActionSheets/ImagePicker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';

import styles from './AddPost.style';

// helpers
import {configs} from '../../config/config';

export default function AddPost() {
  const [title, setTitle] = React.useState('');
  const actionSheetRef = React.useRef(true);
  const [image, setImage] = React.useState('');
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

  const uploadToServer = async () => {
    try {
      if (typeof image === 'undefined' || image === '') {
        Snackbar.show({
          text: 'Please Upload A File',
          duration: Snackbar.LENGTH_SHORT,
        });
        return;
      }
      const token = (await AsyncStorage.getItem('token')) || '';
      const request = await fetch(`${configs.SERVER_URL}/api/v1/post/add`, {
        body: createFormData(image, {title: 'post'}),
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
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
  const evalString = (value) => {
    if(typeof value !== 'string' && typeof value !== 'undefined'){
      return true;
    }
    return false;
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Add Post</Text>
      </View>
      <View>
        {evalString(image) && (
          <TouchableOpacity
            style={styles.imagePlaceholder}
            onPress={() => {
              createPost();
            }}>
            <Image source={{uri: image.uri}} style={styles.placeholder} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.imagePlaceholder}>
        {!image && (
          <TouchableOpacity
            style={styles.placeholder}
            onPress={() => {
              createPost();
            }}>
            <AntDesign name="camerao" color="#000" size={30} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.inputs}>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={uploadToServer}
            >
            <Text style={styles.actions}>Add Post</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ImagePicker actionSheetRef={actionSheetRef} setImage={setImage} />
    </View>
  );
}
