import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {useStoreActions} from 'easy-peasy';
import Snackbar from 'react-native-snackbar';
import Ionicons from 'react-native-vector-icons/Ionicons';

// components
import Button from '../../../components/common/Button';

// Styles
import styles from './SignIn.style';

//helper
import {SignInInputs} from '../../../helper/inputvalidator';
import server from '../../../service/server';

export default function SignIn(props) {
  // props
  const {navigation} = props;

  // default states
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [networkloading, setNetworkLoading] = React.useState(false);
  const [isViewAble, setIsViewAble] = React.useState(false);
  // Error states
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  // globs and actions
  const loginCallback = useStoreActions((action) => action.loginCallback);
  const handleToggle = () => {
    setIsViewAble(t => !t);
  }
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
          setNetworkLoading(false);
          loginCallback(response.data.token)
            .then(() => {
              Snackbar.show({
                text: response.data.message,
                duration: Snackbar.LENGTH_SHORT,
              });
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
            buttonHandler={authenticate}
            buttonText="Login"
            isLoading={networkloading}
          />
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
