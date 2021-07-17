import React from 'react';
import {View, Text, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Button from '../../../components/common/Button';
import styles from './ForgotPassword.style';

import server from '../../../service/server';
import Snackbar from 'react-native-snackbar';

export default function ForgotPassword(props) {
  const {navigation} = props;
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const requestChangePassword = async () => {
    setLoading(true);
    try {
        if(!email) {
            Snackbar.show({ text: 'Please enter your email address', duration: 5000 });
        }
      const response = await server.forgotPassword({
          email: email
      });
      if (response.data.success) {
        navigation.navigate('activate');
        setLoading(false);
      } else {
        Snackbar.show({
          text: response.data.message,
          duration: Snackbar.LENGTH_SHORT,
        });
        setLoading(false);
      }
      setLoading(false);
    } catch (e) {
      Snackbar.show({
        text: 'Something went wrong, please try again later',
        duration: Snackbar.LENGTH_SHORT,
      });
      console.log(e);
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <View>
        <View>
          <TextInput
            style={styles.inputValue}
            placeholder="Enter Email Address"
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(value) => setEmail(value)}
          />
        </View>
        <View>
          <Button
            isLoading={loading}
            buttonText="Request"
            buttonHandler={requestChangePassword}
          />
        </View>
      </View>
    </View>
  );
}
