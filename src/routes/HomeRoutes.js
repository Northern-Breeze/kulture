import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Preview from '../screens/Preview';

const Stack = createStackNavigator();

export default function HomeRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="preview" component={Preview} />
    </Stack.Navigator>
  );
}
