import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import Profile from '../../screens/Profile';
import Support from '../../screens/Profile/Support';
import About from '../../screens/Profile/About';

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="profile_user"
        component={Profile}
        options={({route}) => ({
          title: 'Profile',
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerStyle: {
            shadowColor: 'transparent', // this covers iOS
            elevation: 0,
          },
        })}
      />
      <Stack.Screen name="profile_support" component={Support} />
      <Stack.Screen
        name="About Kulture"
        component={About}
        options={({route}) => ({
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
          },
          headerShadowVisible: false,
        })}
      />
    </Stack.Navigator>
  );
}
