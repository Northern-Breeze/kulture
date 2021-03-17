import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Preview from '../../screens/Preview';
import HomeScreen from '../../screens/Home';

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
        </Stack.Navigator>
    )
}
