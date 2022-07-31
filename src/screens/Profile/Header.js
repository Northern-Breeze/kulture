import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styles from './Profile.style';


//Components
import ImagePicker from '../../components/ActionSheets/ImagePicker';

// Functions
import uploadToServer from '../../helper/uploadToServer';

export default function Header(props) {
  const {loading, data, fetchProfile, onOpen, navigation} = props;
  const [image, setImage] = React.useState('');
  const actionSheetRef = React.createRef(true);

  const updateProfile = () => {
    actionSheetRef.current?.setModalVisible();
  };

  const setFile = (file) => {
      setImage(file);
      uploadToServer(file);
  }

  const handleNavigate = () => {
    navigation.navigate('Add');
  }

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
          {data !==
            null && (
              <Image
              source={{uri: data.profile}}
              style={styles.avatar}
          />
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
            <SkeletonPlaceholder
              style={styles.loadingName}></SkeletonPlaceholder>
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
          onPress={handleNavigate}
          >
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
      <ImagePicker
        actionSheetRef={actionSheetRef}
        setImage={setFile}
      />
    </>
  );
}
