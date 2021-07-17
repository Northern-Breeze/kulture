import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';
import Activate from '../screens/Auth/Activate';
import ForgotPassword from '../screens/Auth/ForgotPassword';

const Stack = createStackNavigator();

export default function AuthRoutes(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="signin" component={SignIn} />
      <Stack.Screen name="forgotpassword" component={ForgotPassword} />
      <Stack.Screen name="activate" component={Activate} />
    </Stack.Navigator>
  );
}
