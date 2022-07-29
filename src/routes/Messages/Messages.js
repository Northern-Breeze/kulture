import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Tabs from './Tabs';


export default function Messages(){
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="messages" component={Tabs} /> 
    </Stack.Navigator>
  );
}


