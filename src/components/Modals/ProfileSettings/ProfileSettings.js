import React from 'react';
import {View, Modal, Alert, TouchableOpacity, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useStoreActions } from 'easy-peasy';
import styles from './ProfileSettings.style';
import Snackbar from 'react-native-snackbar';

export default function ProfileSettings(props) {
  const {visible, onClose} = props;
  const setIsLoggin = useStoreActions((actions) => actions.setIsLoggin);
  const handleLogOut = async () => {
    try {
      const removeToken = await AsyncStorage.removeItem('token');
      if(removeToken) {
        setIsLoggin(false);
        Snackbar.show({
          text: 'Logged out',
          duration: 3000,
        });
      }
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
          <View>
            <TouchableOpacity onPress={handleLogOut}>
              <Text>
                  Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
