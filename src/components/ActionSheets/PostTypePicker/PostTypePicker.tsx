import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './PostTypePicker.style';

type Props = {
  actionSheetRef: any;
  setPickerType: any;
};

export default function PostTypePicker(props: Props) {
  const {actionSheetRef, setPickerType} = props;
  return (
    // @ts-ignore
    <ActionSheet ref={actionSheetRef} animated={true}>
      <View style={styles.actionSheet}>
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setPickerType('photo');
              actionSheetRef.current?.hide();
            }}
            style={styles.imageButtons}>
            <View>
              <AntDesign name="camera" color="#000" size={20} />
            </View>
            <View style={styles.textContainer}>
              <Text>Post Image</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setPickerType('video');
              actionSheetRef.current?.hide();
            }}
            style={styles.imageButtons}>
            <View>
              <AntDesign name="videocamera" color="#000" size={20} />
            </View>
            <View style={styles.textContainer}>
              <Text>Post Video</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ActionSheet>
  );
}
