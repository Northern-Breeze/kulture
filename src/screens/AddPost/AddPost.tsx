import React from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './AddPost.style';

// components
import ImagePicker from '../../components/ActionSheets/ImagePicker';


type Props = {
  navigation: {
    navigate(param: string): void;
  };
};

export default function AddPost(props: Props) {
  // props
  const {navigation} = props;

  // state
  const [pickerType] = React.useState('');

  // refs
  const actionSheetRef = React.useRef<any>(true);

  const pickerRef = React.useRef<any>();

  const createPost = () => {
    if (pickerType === '') {
      pickerRef.current?.setModalVisible();
    }
    actionSheetRef.current?.setModalVisible();
  };


  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.placeholder}
          onPress={() => {
            createPost();
          }}>
          <LottieView autoPlay loop source={require('../../assets/upload-image.json')} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.infoText}>Click on Image to Upload/Take a picture</Text>
      </View>
      <ImagePicker
        actionSheetRef={actionSheetRef}
        pickerType={pickerType}
        navigation={navigation}
      />
    </View>
  );
}
