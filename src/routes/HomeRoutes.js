import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Preview from '../screens/Preview';
import Search from '../screens/Search';
import Add from '../screens/Add';
import Chat from '../screens/Chat';
import Account from '../screens/Account';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const StackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="preview" component={Preview} />
    </Stack.Navigator>
  );
};

export default function HomeRoute() {
  return (
    <Tab.Navigator
      activeColor="#000"
      screenOptions={({route}) => ({
        tabBarColor: '#fff',
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Search') {
            iconName = 'ios-search-outline';
          } else if (route.name === 'Add') {
            iconName = 'add';
          } else if (route.name === 'Account') {
            iconName = 'person-outline';
          } else if (route.name === 'Chat') {
            iconName = 'chatbubble-outline';
          }

          return <Ionicons name={iconName} size={25} color={'#000'} />;
        },
      })}>
      <Tab.Screen name="Home" component={StackScreen} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
