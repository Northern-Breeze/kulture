import React from 'react';
import {View, Text, TextInput, ActivityIndicator} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useStoreActions, useStoreState} from 'easy-peasy';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';

import styles from './SignIn.style';

import {SignInInputs} from '../../helper/inputvalidator';

import Validation from '../../components/Form/Validation';

import server from '../../service/server';

export default function SignIn(props) {
  const {navigation} = props;
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const [networkloading, setNetworkLoading] = React.useState(false);
  const login = useStoreActions((action) => action.login);
  const authenticate = async () => {
    try {
      const type = SignInInputs({email, password});

      if (type.email) {
        setEmailError(type.email.message);
      }

      if (type.password) {
        setPasswordError(type.password.message);
      }

      if (type.email.message || type.password.message) {
        return;
      }
      setNetworkLoading(true);
      const response = await server.login({
        email: email,
        password: password,
      });
      const status = response.status;
      if (status === 200) {
        if (response.data.success) {
          Snackbar.show({
            text: response.data.message,
            duration: Snackbar.LENGTH_SHORT,
          });
          setNetworkLoading(false);
          AsyncStorage.setItem('token', response.data.token)
            .then((inserted) => {
              login();
            })
            .catch((error) => console.log(error));
        } else {
          Snackbar.show({
            text: response.data.message,
            duration: Snackbar.LENGTH_SHORT,
          });
          setNetworkLoading(false);
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
      setNetworkLoading(false);
      Snackbar.show({
        text: 'Something went wrong please try again later',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  };
  const goTo = (place) => {
    navigation.navigate(place);
  };
  return (
    <View style={styles.container}>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Login</Text>
      </View>
      <View style={styles.fields}>
        <View style={styles.input}>
          <TextInput
            style={styles.inputValue}
            placeholder="Enter Email Address"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
          />
        </View>
        <Validation message={emailError} />
        <View style={styles.input}>
          <TextInput
            style={styles.inputValue}
            placeholder="Enter Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
          />
        </View>
        <Validation message={passwordError} />
        <View style={styles.input}>
          <TouchableOpacity style={styles.button} onPress={authenticate}>
            {networkloading ? (
              <ActivityIndicator size="large" color="#fff" />
            ) : (
              <Text style={styles.nextText}>SIGN IN</Text>
            )}
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.linkbtn}
            onPress={() => goTo('signup')}>
            <Text style={styles.linkText}>don't have an account? Register</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.linkbtn}
            onPress={() => goTo('activate')}>
            <Text style={styles.linkText}>Activate Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
