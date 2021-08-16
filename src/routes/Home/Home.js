import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Preview from '../../screens/Preview';
import HomeScreen from '../../screens/Home';
import ProfileView from '../../screens/Tab/ProfileView';

const Stack = createStackNavigator();

export default function Home() {
    return (
        <Stack.Navigator
            headerMode='none'
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
            />
            <Stack.Screen
                name="Preview"
                component={Preview}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileView}
            />
        </Stack.Navigator>
    )
}
