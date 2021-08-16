import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';
import Activate from '../screens/Auth/Activate';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import ChangePassword from '../screens/Auth/ChangePassword';

const Stack = createStackNavigator();

export default function AuthRoutes(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="welcome"
        component={Welcome}
        options={{
          title: '',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="signup"
        component={SignUp}
        options={{
          title: 'Sign Up',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="signin"
        component={SignIn}
        options={{
          title: 'Sign In',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="forgotpassword"
        component={ForgotPassword}
        options={{
          title: 'Forgot Password',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="changepassword"
        component={ChangePassword}
        options={{
          title: 'New Password',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="activate"
        component={Activate}
        options={{
          title: 'Activate',
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
