import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import ProfileView from '../../screens/Tab/ProfileView';
import Profile from '../../screens/Profile';
import Support from '../../screens/Profile/Support';

const Stack = createStackNavigator();

export default function ProfileStack() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="profile_user" component={Profile} />
            <Stack.Screen name="profile_support" component={Support} />
            <Stack.Screen name="profile_view" component={ProfileView} />
        </Stack.Navigator>
    )
}
