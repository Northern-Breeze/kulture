import React from 'react';
import {View, Modal, Alert, TouchableOpacity, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useStoreActions } from 'easy-peasy';
import Snackbar from 'react-native-snackbar';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import styles from './ProfileSettings.style';
export default function ProfileSettings(props) {
  const {visible, onClose, navigation} = props;

  const handleLogOut = async () => {
    try {
      await AsyncStorage.removeItem('token');
      onClose();
    } catch (error) {
      Snackbar.open({
        text: 'Something went wrong',
        duration: 3000,
      })
    }
  }

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
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={onClose}>
            <AntDesign name="close" size={30} color="#000" />
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.control}>
            <FontAwesome5 name="door-open" color="#000" size={30} />
            <TouchableOpacity onPress={handleLogOut} style={styles.button}>
              <Text style={styles.logoutText}>
                  Logout
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.control}>
            <Ionicons name="ios-color-palette" color="#000" size={31} />
            <TouchableOpacity onPress={() => {}} style={styles.button}>
              <Text style={styles.logoutText}>
                  Dark Mode
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
