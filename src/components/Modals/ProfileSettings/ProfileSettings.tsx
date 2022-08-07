import React from 'react';
import {View, Modal, Alert, TouchableOpacity, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useStoreActions} from 'easy-peasy';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import styles from './ProfileSettings.style';
import { showMessage } from 'react-native-flash-message';

type Props = {
  visible: boolean;
  onClose(): void;
  navigation: {
    navigate(param: string): void;
  }
}

export default function ProfileSettings(props: Props) {
  const {visible, onClose, navigation} = props;

  const setIsLoggin = useStoreActions<any>((actions) => actions.setIsLoggin);

  const handleLogOut = async () => {
    try {
      setIsLoggin(false);
      onClose();
    } catch (error) {
      showMessage({
        message: 'Something went wrong',
        type: 'danger'
      });
    }
  };

  const handleSupport = () => {
    onClose();
    navigation.navigate('profile_support');
  };

  const handleAbout = () => {
    onClose();
    navigation.navigate('About Kulture');
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
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
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.control}>
            <Ionicons name="heart-circle" color="#000" size={31} />
            <TouchableOpacity onPress={handleSupport} style={styles.button}>
              <Text style={styles.logoutText}>Support Me</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.control}>
            <MaterialCommunityIcons
              name="office-building"
              color="#000"
              size={31}
            />
            <TouchableOpacity onPress={handleAbout} style={styles.button}>
              <Text style={styles.logoutText}>About Kulture</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
