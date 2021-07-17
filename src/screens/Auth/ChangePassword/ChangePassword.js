import React from 'react';
import {View, TextInput, Image} from 'react-native';
import styles from './ChangePassword.style';
import Button from '../../../components/common/Button';
import Snackbar from 'react-native-snackbar';

import server from '../../../service/server';

export default function ChangePassword(props) {
  const {navigation} = props;
  const [networkloading, setNetworkLoading] = React.useState(false);
  const [otp1, setOtp1] = React.useState('');
  const [otp2, setOtp2] = React.useState('');
  const [otp3, setOtp3] = React.useState('');
  const [otp4, setOtp4] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [otpCorrect, setOTPCorrect] = React.useState(false);
  const submit = async () => {
    try {
      const otp = `${otp1}${otp2}${otp3}${otp4}`;
      if (otp.length > 4) {
        Snackbar.show({
          text: 'Input cannot be empty',
          duration: Snackbar.LENGTH_SHORT,
        });
        return;
      }
      if(password === '') {
        Snackbar.show({
            text: 'Input cannot be empty',
            duration: Snackbar.LENGTH_SHORT,
          });
          return;
      }
      setNetworkLoading(true);
      const response = await server.changePassword({
        token: otp,
        password,
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
      <View>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.form}>
        {otpCorrect ? (
          <View>
            <TextInput
              placeholder="Enter new password"
              style={styles.inputValue}
              autoCapitalize="none"
              onChangeText={(value) => setPassword(value)}
            />
          </View>
        ) : (
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
        )}
        <View style={styles.buttonContainer}>
          <Button
            buttonText={`${otpCorrect ? 'Change Password' : 'Continue'}`}
            buttonHandler={() => {
              if (
                otpCorrect
              ) {
                submit();
              } else if(otp1 !== '' && otp2 !== '' && otp3 !== '' && otp4 !== '') {
                setOTPCorrect(true);
              }
            }}
            isLoading={networkloading}
          />
        </View>
      </View>
    </View>
  );
}
