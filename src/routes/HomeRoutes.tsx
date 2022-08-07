import * as React from 'react';
import {View, Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useStoreState, State } from 'easy-peasy';
import IconBadge from 'react-native-icon-badge';
import iconStyles from './IconStyles/icons.style'

// Screens
import AddPost from '../screens/AddPost';

// Stacks
import Home from './Home';
import ProfileStack from './Profile';
import Messages from './Messages';
import Notifications from './Notifications';

import {Model} from '../store/model';

const Tab = createMaterialBottomTabNavigator();

export default function HomeRoute() {
  const getNewNotificationCount = useStoreState((state: State<Model>) => state.getNewNotificationCount);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#000"
      barStyle={{backgroundColor: '#347deb', paddingBottom: 2}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <AntDesign name="home" color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({color}) => (
            <AntDesign name="message1" color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddPost}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({color}) => (
            <Ionicons name="add-circle" color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({color, focused}) => (
            <IconBadge
              MainElement={
                <Ionicons
                  name="notifications-outline"
                  color={color}
                  size={23}
                />
              }
              BadgeElement={<Text style={iconStyles.iconCountText}>{getNewNotificationCount}</Text>}
              IconBadgeStyle={iconStyles.iconBadgeStyle}
              Hidden={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <AntDesign name="user" color={color} size={23} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
