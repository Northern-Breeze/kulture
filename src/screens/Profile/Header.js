import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styles from './Profile.style';


//Components
import ImagePicker from '../../components/ActionSheets/ImagePicker';

// Functions
import uploadToServer from '../../helper/uploadToServer';

export default function Header(props) {
  const {loading, data, fetchProfile, onOpen} = props;
  const [image, setImage] = React.useState('');
  const actionSheetRef = React.createRef(true);

  const updateProfile = () => {
    actionSheetRef.current?.setModalVisible();
  };

  const setFile = (file) => {
      setImage(file);
      uploadToServer(file);
  }


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
          disabled={loading}>
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
