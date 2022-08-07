import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// screens
import Friends from '../../../screens/Message/Friends';
import Notifications from '../../../screens/Notification';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All" component={Notifications} />
      <Tab.Screen name="Following" component={Friends} />
      <Tab.Screen name="Settings" component={Friends} />
    </Tab.Navigator>
  );
}
