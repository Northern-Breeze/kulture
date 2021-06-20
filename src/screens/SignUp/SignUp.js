import React from 'react';
import {View, Text, TextInput, ActivityIndicator} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Snackbar from 'react-native-snackbar';
import styles from './SignUp.style';

import {signUpInputs} from '../../helper/inputvalidator';
import Validation from '../../components/Form/Validation';

import server from '../../service/server';

export default function SignUp(props) {
  const {navigation} = props;
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [networkloading, setNetworkLoading] = React.useState(false);
  // Error messages
  const [emailError, setEmailError] = React.useState('');
  const [usernameError, setUsernameError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const register = async () => {
    try {
      const type = signUpInputs({email, username, password});
      if (type.email) {
        setEmailError(type.email.message);
      }
      if (type.username) {
        setUsernameError(type.username.message);
      }
      if (type.password) {
        setPasswordError(type.password.message);
      }
      if (
        type.email.message ||
        type.password.message ||
        type.username.message
      ) {
        return;
      }
      setNetworkLoading(true);
      const response = await server.register({
        username: username,
        email: email,
        password: password,
      });
      const status = response.status;
      if (status === 201) {
        if (response.data.success) {
          Snackbar.show({
            text: response.data.message,
            duration: Snackbar.LENGTH_SHORT,
          });
          setNetworkLoading(false);
          goTo('activate');
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
        <Text style={styles.registerText}>Register</Text>
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
            placeholder="Enter Username"
            onChangeText={setUsername}
            value={username}
          />
        </View>
        <Validation message={usernameError} />
        <View style={styles.input}>
          <TextInput
            style={styles.inputValue}
            placeholder="Enter Password"
            onChangeText={setPassword}
            value={password}
          />
        </View>
        <Validation message={passwordError} />
        <View style={styles.input}>
          <TouchableOpacity style={styles.button} onPress={register}>
            {networkloading ? <ActivityIndicator  size="large" color="#fff" /> : <Text style={styles.nextText}>SIGN UP</Text>}
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.linkbtn} onPress={() => {
            goTo('signin')
          }}>
            <Text style={styles.linkText}>Already have an account? Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
