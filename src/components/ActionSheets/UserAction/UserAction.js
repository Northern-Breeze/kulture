import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import ActionSheet from 'react-native-actions-sheet';

import styles from './UserAction.style';

export default function UserAction(props) {
    const { actionSheetRef, username } = props;
    return (
        <ActionSheet ref={actionSheetRef} animated={true}>
        <View style={styles.actionSheet}>
          <View style={styles.container}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.imageButtons}>
              <View>
                <AntDesign name="adduser" color="#000" size={20} />
              </View>
              <View style={styles.textContainer}>
                <Text>
                    Follow {username}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.imageButtons}>
              <View>
                <AntDesign name="videocamera" color="#000" size={20} />
              </View>
              <View style={styles.textContainer}>
                <Text>
                    Call {username}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ActionSheet>
    )
}
