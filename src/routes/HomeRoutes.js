import * as  React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'

import Home from './Home';
import Profile from '../screens/Profile';
import AddPost from '../screens/AddPost'
import Search from '../screens/Search';


const Tab = createMaterialBottomTabNavigator();


export default function HomeRoute() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#000"
            barStyle={{ backgroundColor: '#347deb', paddingBottom: 2 }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                      <AntDesign name="home" color="#fff" size={26} />
                    ),
                  }}
                />
            <Tab.Screen 
                name="Search" 
                component={Search} 
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color }) => (
                      <EvilIcons name="search" color="#fff" size={26} />
                    ),
                  }}
                />
            <Tab.Screen 
                name="Add" 
                component={AddPost} 
                options={{
                    tabBarLabel: 'Add',
                    tabBarIcon: ({ color }) => (
                      <EvilIcons name="plus" color="#fff" size={26} />
                    ),
                  }}
                />
            <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                      <AntDesign name="user" color="#fff" size={26} />
                    ),
                  }}
                />
        </Tab.Navigator>
    )
}