import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Snackbar from 'react-native-snackbar';
import {
  getUniqueId,
  getManufacturer,
  getAndroidId,
  getApplicationName,
  getBaseOs,
  getCarrier,
  getBrand,
  getBuildNumber,
  getFirstInstallTime,
  getFingerprint,
  getLastUpdateTime,
  getVersion
} from 'react-native-device-info';

// Styles
import styles from './SignUp.style';

// helper methods
import {signUpInputs} from '../../../helper/inputvalidator';

// components
import Validation from '../../../components/Form/Validation';
import Button from '../../../components/common/Button';

import server from '../../../service/server';

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
  const getDetails = async () => {
    const androidId = await getAndroidId();
    const os = await getBaseOs();
    const carrier = await getCarrier();
    const timeInstalled = await getFirstInstallTime();
    const fingerPrint = await getFingerprint()
    const lastUpdateTime = await getLastUpdateTime();
    const applicationName = getApplicationName();
    const manufacturer = getManufacturer();
    const buildNumber = getBuildNumber();
    const branch = getBrand();
    const uniqueId = getUniqueId();
    const version =  getVersion();
    return {
      appName: applicationName,
      deviceId: uniqueId,
      androidId: androidId,
      baseOs: os,
      manufacturer: manufacturer,
      carrier: carrier,
      timeInstalled: timeInstalled,
      lastUpdateTime: lastUpdateTime,
      fingerPrint: fingerPrint,
      buildNumber: buildNumber,
      branch: branch,
      version: version
    };
  };
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
      const user = await getDetails();
      const response = await server.register({
        username: username,
        email: email,
        password: password,
        userData: user
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
      <View style={styles.logo}>
        <Image source={require('../../../assets/images/logo.png')} />
      </View>
      <View style={styles.fields}>
        <View style={styles.input}>
          <TextInput
            style={styles.inputValue}
            placeholder="Enter Email Address"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <Validation message={emailError} />
        <View style={styles.input}>
          <TextInput
            style={styles.inputValue}
            placeholder="Enter Username"
            onChangeText={setUsername}
            value={username}
            autoCapitalize="none"
          />
        </View>
        <Validation message={usernameError} />
        <View style={styles.input}>
          <TextInput
            style={styles.inputValue}
            placeholder="Enter Password"
            onChangeText={setPassword}
            value={password}
            autoCapitalize="none"
            secureTextEntry
          />
        </View>
        <Validation message={passwordError} />
        <View style={styles.input}>
          <Button
            isLoading={networkloading}
            buttonHandler={register}
            buttonText="Register"
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.linkbtn}
            onPress={() => {
              goTo('signin');
            }}>
            <Text style={styles.linkText}>Already have an account? Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
