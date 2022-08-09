import React from 'react';
import {View, Text, Image, TouchableOpacity, Platform} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styles from './Profile.style';
import Snackbar from 'react-native-snackbar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {configs} from '../../config/config';

//Components
import ImagePicker from '../../components/ActionSheets/ImagePicker';

type Props = {
  loading: boolean;
  data: any;
  fetchProfile(): void;
  onOpen(): void;
  navigation: {
    navigate(param: string): void;
  };
};

export default function Header(props: Props) {
  const {loading, data, fetchProfile, onOpen, navigation} = props;
  const [image, setImage] = React.useState('');
  const actionSheetRef = React.createRef<any>();

  const updateProfile = () => {
    actionSheetRef.current?.setModalVisible();
  };

  const setFile = (file: any) => {
    setImage(file);
    uploadToServer();
  };

  const handleNavigate = () => {
    navigation.navigate('Add');
  };

  const createFormData = (file: any) => {
    const data = new FormData();

    data.append('picture', {
      name: file.fileName,
      type: file.type,
      uri:
        Platform.OS === 'android' ? file.uri : file.uri.replace('file://', ''),
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
          {loading && (
            <SkeletonPlaceholder>
              <View style={styles.loadingName}></View>
            </SkeletonPlaceholder>
          )}
          {!loading && data !== null && (
            <Text style={styles.username}>{data.username}</Text>
          )}
        </View>
        <View style={styles.locationContainer}>
          <Text style={styles.locations}>South Africa, Polokwane</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.button}
          disabled={loading}
          onPress={handleNavigate}>
          <Text style={styles.buttonTextAdd}>Add New Post</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={loading}
          style={[styles.button, styles.buttonSettings]}
          activeOpacity={0.9}
          onPress={() => {
            onOpen();
          }}>
          <Text style={[styles.buttonTextAdd, styles.buttonTextSettings]}>
            Settings
          </Text>
        </TouchableOpacity>
      </View>
      <ImagePicker actionSheetRef={actionSheetRef} pickerType="Profile" navigation={navigation} />
    </>
  );
}
