import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

// functions

// Screens
import Home from './Home';
import AddPost from '../screens/AddPost';
import Search from '../screens/Search';
import Message from '../screens/Message';

// Stacks
import ProfileStack from './Profile';

const Tab = createMaterialBottomTabNavigator();

export default function HomeRoute() {

  // hooks

  // refs


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
            <AntDesign name="home" color="#fff" size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <AntDesign name="search1" color="#fff" size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddPost}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({color}) => (
            <Ionicons name="add-circle" color="#fff" size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({color}) => (
            <AntDesign name="message1" color="#fff" size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <AntDesign name="user" color="#fff" size={23} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
