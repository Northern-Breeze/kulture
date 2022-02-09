import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Message from '../../../../screens/Message';
import Groups from '../../../../screens/Message/Groups';

export default function Messages(){
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="groups" component={Groups} /> 
      <Stack.Screen name="chats" component={Message} /> 
    </Stack.Navigator>
  );
}


