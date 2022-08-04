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
import Ionicons from 'react-native-vector-icons/Ionicons';

// Styles
import styles from './SignUp.style';

import Button from '../../../components/common/Button';

import server from '../../../service/server';

export default function SignUp(props) {
  const {navigation} = props;
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [networkloading, setNetworkLoading] = React.useState(false);
  const [isViewAble, setIsViewAble] = React.useState(false);

  const handleToggle = () => {
    setIsViewAble(t => !t);
  }

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
      <View style={styles.avatarContainer}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.fields}>
        <View style={styles.inputs}>
          <TextInput
            style={styles.inputValue}
            placeholder="Enter Email Address"
            onChangeText={setEmail}
            value={email}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputs}>
          <TextInput
            style={styles.inputValue}
            placeholder="Enter Username"
            onChangeText={setUsername}
            value={username}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputs}>
          <TextInput
            style={styles.inputValue}
            placeholder="Enter Password"
            onChangeText={setPassword}
            autoCapitalize="none"
            value={password}
            secureTextEntry={!isViewAble}
          />
          <TouchableOpacity style={styles.eyeIcon} onPress={handleToggle}>
            <Ionicons
              name={isViewAble ? 'eye-sharp' : 'eye-off'}
              size={30}
              color="#000"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputs}>
          <Button
            buttonHandler={register}
            buttonText="Register"
            isLoading={networkloading}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.linkbtn}
            onPress={() => goTo('signin')}>
            <Text style={styles.linkText}>Already have an account? Register</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.linkbtn}
            onPress={() => goTo('forgotpassword')}>
            <Text style={styles.linkText}>Forgot password? request</Text>
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
