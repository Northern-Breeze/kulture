import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ActionSheet from 'react-native-actions-sheet';
import Snackbar from 'react-native-snackbar';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {configs} from '../../config/config';
import styles from './Profile.style';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Header(props) {
  const {loading, data, fetchProfile} = props;

  const actionSheetRef = React.createRef(true);

  const updateProfile = () => {
    actionSheetRef.current?.setModalVisible();
  };
  const handleUseCamera = () => {
    const options = {
      mediaType: 'photo',
      selectionLimit: 1,
      quality: 1.0,
      includeBase64: false,
      saveToPhotos: true,
    };
    launchCamera({options}, (response) => {
      if (response.didCancel) {
        Snackbar.show({
          text: 'User cancelled photo picker',
          duration: Snackbar.LENGTH_SHORT,
        });
      } else if (response.error) {
        Snackbar.show({
          text: `ImagePicker Error:  ${response.error}`,
          duration: Snackbar.LENGTH_SHORT,
        });
      } else {
        const {assets} = response;
        const file = assets[0];
        uploadToServer(file);
      }
    });
  };
  const handleUseGallery = () => {
    const options = {
      mediaType: 'photo',
      selectionLimit: 1,
      includeBase64: false,
      quality: 1.0,
    };
    launchImageLibrary({options}, (response) => {
      if (response.didCancel) {
        Snackbar.show({
          text: 'User cancelled photo picker',
          duration: Snackbar.LENGTH_SHORT,
        });
      } else if (response.error) {
        Snackbar.show({
          text: `ImagePicker Error:  ${response.error}`,
          duration: Snackbar.LENGTH_SHORT,
        });
      } else {
        const {assets} = response;
        const file = assets[0];
        uploadToServer(file);
      }
    });
  };

  const createFormData = (file) => {
    const data = new FormData();

    data.append("picture", {
      name: file.fileName,
      type: file.type,
      uri:
        Platform.OS === "android" ? file.uri : file.uri.replace("file://", "")
    });

    return data;
  }

  const uploadToServer = async (file) => {
    try {
      if (typeof file === 'undefined') {
        Snackbar.show({
          text: 'Please Upload A File',
          duration: Snackbar.LENGTH_SHORT,
        });
        return;
      }
      const token = await AsyncStorage.getItem('token') || '';
      const request = await fetch(`${configs.SERVER_URL}/api/v1/profile/update-image`,{
        body: createFormData(file),
        method: 'POST',
        headers : {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });
      const response = await request.json(); 
      if (response.status === 200) {
        if (response.success) {
          Snackbar.show({
            text: response.message,
            duration: Snackbar.LENGTH_SHORT,
          });
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
    <>
      <View style={styles.avatarContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            updateProfile();
          }}>
          {data !== null && (
            <Image source={{uri: data.profile}} style={styles.avatar} />
          )}
          {loading && data === null && (
            <SkeletonPlaceholder>
              <View style={styles.avatar} />
            </SkeletonPlaceholder>
          )}
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.usernameContainer}>
          {loading && <Text style={styles.username}>loading ...</Text>}
          {!loading && data !== null && (
            <Text style={styles.username}>{data.username}</Text>
          )}
        </View>
        <View style={styles.locationContainer}>
          <Text style={styles.locations}>South Africa, Polokwane</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity activeOpacity={0.9} style={styles.button}>
          <Text style={styles.buttonTextAdd}>Add New Post</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonSettings]}
          activeOpacity={0.9}>
          <Text style={[styles.buttonTextAdd, styles.buttonTextSettings]}>
            Settings
          </Text>
        </TouchableOpacity>
      </View>
      <ActionSheet ref={actionSheetRef} animated={true}>
        <View style={styles.actionSheet}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleUseCamera}
            style={styles.imageButtons}>
            <Text>Use Camera to take a picture</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleUseGallery}
            style={styles.imageButtons}>
            <Text>Select image from gallery</Text>
          </TouchableOpacity>
        </View>
      </ActionSheet>
    </>
  );
}
