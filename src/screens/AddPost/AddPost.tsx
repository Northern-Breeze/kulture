import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';

import styles from './AddPost.style';

// components
import ImagePicker from '../../components/ActionSheets/ImagePicker';

// helpers
import {configs} from '../../config/config';
import Loading from '../../components/Loading';
import {showMessage} from 'react-native-flash-message';

type Props = {
  navigation: {
    navigate(param: string): void;
  };
};


export default function AddPost(props: Props) {
  // props
  const {navigation} = props;

  // state
  const [image, setImage] = React.useState<any>('');
  const [pickerType] = React.useState('');
  const [requestStatus, setRequestStatus] = React.useState('IDLE');

  // refs
  const actionSheetRef = React.useRef<any>(true);

  const pickerRef = React.useRef<any>();

  const createPost = () => {
    if (pickerType === '') {
      pickerRef.current?.setModalVisible();
    }
    actionSheetRef.current?.setModalVisible();
  };

  const createFormData = (file: any, body:{[key:string]: string}) => {
    const data = new FormData();

    data.append('picture', {
      name: file.fileName,
      type: file.type,
      uri:
        Platform.OS === 'android' ? file.uri : file?.uri?.replace('file://', ''),
    });

    Object.keys(body).forEach((key) => {
      data.append(key, body[key]);
    });

    return data;
  };

  const uploadToServer = async () => {
    try {
      if (typeof image === 'undefined' || image === '') {
        showMessage({
          message: 'Please upload an image',
          type: 'danger',
        });
        return;
      }
      setRequestStatus('LOADING');
      const token = (await AsyncStorage.getItem('token')) || '';
      const request = await fetch(`${configs.SERVER_URL}/api/v1/post/add`, {
        body: createFormData(image, {title: 'post'}),
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await request.json();
      if (response.success) {
        Snackbar.show({
          text: response.message,
          duration: Snackbar.LENGTH_SHORT,
        });
        actionSheetRef.current?.hide();
        setImage('');
        navigation.navigate('Home');
        setRequestStatus('SUCCESS');
      } else {
        Snackbar.show({
          text: response.message,
          duration: Snackbar.LENGTH_SHORT,
        });
        setRequestStatus('FAILED');
      }
    } catch (error) {
      console.log(error);
      Snackbar.show({
        text: 'Something went wrong, please try again',
        duration: Snackbar.LENGTH_SHORT,
      });
      setRequestStatus('FAILED');
    }
  };

  const evalString = (value: string) => {
    if (typeof value !== 'string' && typeof value !== 'undefined') {
      return true;
    }
    return false;
  };

  return (
    <View style={styles.container}>
      {requestStatus === 'LOADING' && <Loading />}
      {requestStatus !== 'LOADING' && (
        <>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View>
              {evalString(image) && (
                <TouchableOpacity
                  style={styles.imagePlaceholder}
                  onPress={() => {
                    createPost();
                  }}>
                  <Image source={{uri: image.uri}} style={styles.placeholder} />
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.imagePlaceholder}>
              {!evalString(image) && (
                <TouchableOpacity
                  style={styles.placeholder}
                  onPress={() => {
                    createPost();
                  }}>
                  <AntDesign name="camerao" color="#000" size={30} />
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.inputs}>
              <View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={uploadToServer}>
                  <Text style={styles.actions}>Add Post</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
          <View></View>
          <ImagePicker
            actionSheetRef={actionSheetRef}
            setImage={setImage}
            pickerType={pickerType}
          />
        </>
      )}
    </View>
  );
}
