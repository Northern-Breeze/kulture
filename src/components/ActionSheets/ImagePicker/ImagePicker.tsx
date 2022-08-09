import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {showMessage} from 'react-native-flash-message';
import {
  launchCamera,
  launchImageLibrary,
  CameraOptions,
  ImageLibraryOptions,
} from 'react-native-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './ImagePicker.style';

type Props = {
  actionSheetRef: any;
  pickerType?: string;
  navigation: {
    navigate(param: string, options: any): void;
  };
};

const ImagePicker = (props: Props) => {
  const {actionSheetRef, navigation, pickerType} = props;

  const handleUseCamera = () => {
    const options: CameraOptions = {
      mediaType: 'photo',
      quality: 1.0,
      includeBase64: true,
      saveToPhotos: true,
    };
    launchCamera(options, (response) => {
      if (response.didCancel) {
        showMessage({
          message: 'User cancelled photo picker',
          type: 'info',
        });
      } else if (response.errorMessage) {
        showMessage({
          message: `ImagePicker Error:  ${response.errorMessage}`,
          type: 'danger',
        });
      } else {
        const {assets} = response;
        if (assets) {
          const file = assets[0];
          navigation.navigate('Upload', {
            file,
            pickerType,
          });
        }
        actionSheetRef.current?.hide();
      }
    });
  };
  const handleUseGallery = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      selectionLimit: 1,
      includeBase64: true,
      quality: 1.0,
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        showMessage({
          message: 'User cancelled photo picker',
          type: 'info',
        });
      } else if (response.errorMessage) {
        showMessage({
          message: `ImagePicker Error:  ${response.errorMessage}`,
          type: 'danger',
        });
      } else {
        const {assets} = response;
        if (assets) {
          const file = assets[0];
          navigation.navigate('Upload', {
            file,
            pickerType,
          });
        }
        actionSheetRef.current?.hide();
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
};

export default ImagePicker;
