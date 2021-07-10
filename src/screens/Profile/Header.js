import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ActionSheet from 'react-native-actions-sheet';

import styles from './Profile.style';

export default function Header(props) {
  const {loading, data} = props;

  const actionSheetRef = React.createRef(true);

  const updateProfile = () => {
    actionSheetRef.current?.setModalVisible();
  };
  const handleUseCamera = () => {
    const options = {
      mediaType: 'photo',
      selectionLimit: 1,
      includeBase64: false,
      saveToPhotos: true,
    }
    launchCamera({ options }, (data) => {
      console.log(data)
    });
  }
  const handleUseGallery = () => {
    const options = {
      mediaType: 'photo',
      selectionLimit: 1,
      includeBase64: false
    }
    launchImageLibrary({ options }, (data) => {
      console.log(data);
    })
  }
  return (
    <>
      <View style={styles.avatarContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            updateProfile();
          }}>
          <Image
            source={{uri: 'https://picsum.photos/200/300?grayscale'}}
            style={styles.avatar}
          />
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
      <ActionSheet ref={actionSheetRef}>
        <View style={styles.actionSheet}>
          <TouchableOpacity activeOpacity={0.7} onPress={handleUseCamera}>
            <Text>Use Camera to take a picture</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={handleUseGallery}>
            <Text>Select image from gallery</Text>
          </TouchableOpacity>
        </View>
      </ActionSheet>
    </>
  );
}
