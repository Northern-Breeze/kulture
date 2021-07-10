import React from 'react';
import {View, Text, Modal, Alert, TouchableOpacity} from 'react-native';

import styles from './UpdateProfile.style';

export default function UpdateProfile(props) {
  const {visible} = props;
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
          <View style={styles.container}>
              <TouchableOpacity>
              </TouchableOpacity>
          </View>
      </Modal>
  );
}
