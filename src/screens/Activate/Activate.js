import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import Snackbar from 'react-native-snackbar';
import server from '../../service/server';

import styles from './Activate.style';

export default function Activate(props) {
  const {navigation} = props;
  const [networkloading, setNetworkLoading] = React.useState(false);
  const [otp1, setOtp1] = React.useState('');
  const [otp2, setOtp2] = React.useState('');
  const [otp3, setOtp3] = React.useState('');
  const [otp4, setOtp4] = React.useState('');
  const submit = async () => {
    try {
      const otp = `${otp1}${otp2}${otp3}${otp4}`;
      if (otp.length > 4) {
        Snackbar.show({
          text: response.data.message,
          duration: Snackbar.LENGTH_SHORT,
        });
        return;
      }
      setNetworkLoading(true);
      const response = await server.verify({
        token: otp,
      });
      if (response.status === 200) {
        if (response.data.success) {
          setNetworkLoading(false);
          Snackbar.show({
            text: response.data.message,
            duration: Snackbar.LENGTH_SHORT,
          });
          goTo('signin');
        } else {
          setNetworkLoading(false);
          Snackbar.show({
            text: response.data.message,
            duration: Snackbar.LENGTH_SHORT,
          });
        }
      } else {
        setNetworkLoading(false);
        Snackbar.show({
          text: response.data.message,
          duration: Snackbar.LENGTH_SHORT,
        });
      }
    } catch (error) {
      console.log(error);
      Snackbar.show({
        text: response.data.message,
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  };
  const goTo = (where) => {
    if (typeof where === 'string') {
      navigation.navigate(where);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.inputs}>
          <TextInput
            style={styles.otpbtn}
            onChangeText={setOtp1}
            keyboardType="decimal-pad"
            maxLength={1}
          />
          <TextInput
            style={styles.otpbtn}
            onChangeText={setOtp2}
            keyboardType="decimal-pad"
            maxLength={1}
          />
          <TextInput
            style={styles.otpbtn}
            onChangeText={setOtp3}
            keyboardType="decimal-pad"
            maxLength={1}
          />
          <TextInput
            style={styles.otpbtn}
            onChangeText={setOtp4}
            keyboardType="decimal-pad"
            maxLength={1}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.sendbtn}
            onPress={submit}>
            {networkloading ? (
              <ActivityIndicator size="large" color="#fff" />
            ) : (
              <Text style={styles.verifyText}>Verify</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
