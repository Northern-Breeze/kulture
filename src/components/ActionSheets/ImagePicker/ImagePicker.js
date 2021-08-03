import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Snackbar from 'react-native-snackbar';

import styles from './ImagePicker.style';

export default function ImagePicker(props) {
  const {actionSheetRef, setImage} = props;
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
          setImage(file);
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
        setImage(file);
      }
    });
  };
  return (
    <ActionSheet ref={actionSheetRef} animated={true}>
      <View style={styles.actionSheet}>
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleUseCamera}
            style={styles.imageButtons}>
            <View>
              <AntDesign name="camera" color="#000" size={20} />
            </View>
            <View style={styles.textContainer}>
              <Text>Use Camera to take a picture</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleUseGallery}
            style={styles.imageButtons}>
            <View>
              <AntDesign name="folder1" color="#000" size={20} />
            </View>
            <View style={styles.textContainer}>
              <Text>Select image from gallery</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ActionSheet>
  );
}
