import * as  React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign'

import Home from './Home';
import Message from '../screens/Message';
import Profile from '../screens/Profile';
import AddPost from '../screens/AddPost'
import Search from '../screens/Search';


const Tab = createMaterialBottomTabNavigator();


export default function HomeRoute() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#694fad', paddingBottom: 2 }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                      <AntDesign name="home" color={color} size={26} />
                    ),
                  }}
                />
            <Tab.Screen 
                name="Search" 
                component={Search} 
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color }) => (
                      <EvilIcons name="search" color={color} size={26} />
                    ),
                  }}
                />
            <Tab.Screen 
                name="Add" 
                component={AddPost} 
                options={{
                    tabBarLabel: 'Add',
                    tabBarIcon: ({ color }) => (
                      <EvilIcons name="plus" color={color} size={26} />
                    ),
                  }}
                />
            <Tab.Screen 
                name="Message" 
                component={Message} 
                options={{
                    tabBarLabel: 'Message',
                    tabBarIcon: ({ color }) => (
                      <Feather name="message-circle" color={color} size={26} />
                    ),
                  }}
                />
            <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                      <AntDesign name="user" color={color} size={26} />
                    ),
                  }}
                />
        </Tab.Navigator>
    )
}