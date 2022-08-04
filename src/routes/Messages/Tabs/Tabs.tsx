import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// screens
import Friends from '../../../screens/Message/Friends';
import Messages from './Messages';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Groups" component={Messages} />
      <Tab.Screen name="Friends" component={Friends} />
    </Tab.Navigator>
  );
}
