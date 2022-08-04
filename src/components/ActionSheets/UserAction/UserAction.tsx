import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ActionSheet from 'react-native-actions-sheet';
import {showMessage} from 'react-native-flash-message';

import styles from './UserAction.style';

import server from '../../../service/server';

type Props = {
  actionSheetRef: any;
  username: string;
  userId: number;
};

export default function UserAction(props: Props) {
  const {actionSheetRef, username, userId} = props;
  const followUserHandler = async (id: number) => {
    try {
      const response = await server.followUser({userId: id});
      if (response.data.success) {
        showMessage({
          message: 'Simple message',
          type: 'info',
        });
      } else {
        showMessage({
          message: 'Simple message',
          type: 'info',
        });
      }
    } catch (error) {
      console.log(error);
      showMessage({
        message: 'Something went wrong, please try again',
        type: 'info',
      });
    }
  };
  return (
    <ActionSheet ref={actionSheetRef} animated={true}>
      <View style={styles.actionSheet}>
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.imageButtons}
            onPress={() => {
              followUserHandler(userId);
            }}>
            <View>
              <AntDesign name="adduser" color="#000" size={20} />
            </View>
            <View style={styles.textContainer}>
              <Text>Add {username}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.imageButtons}>
            <View>
              <AntDesign name="videocamera" color="#000" size={20} />
            </View>
            <View style={styles.textContainer}>
              <Text>Call {username}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ActionSheet>
  );
}
