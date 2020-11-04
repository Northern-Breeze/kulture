import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { useStoreState } from 'easy-peasy';

import HomeRoute from './HomeRoutes';
import AuthRoute from './AuthRoutes';

const RootStack = createStackNavigator()

export default function Routes() {
    const isloggedin = useStoreState(state => state.isLoggedin);
    return (
        <RootStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {
                isloggedin ? (
                <RootStack.Screen
                    name={"Home"}
                    component={HomeRoute}
                    options={{
                        title: "Feed"
                    }}
                />
                ) : (
                <RootStack.Screen
                    name={"Auth"}
                    component={AuthRoute}
                />
                )
            }
        </RootStack.Navigator>
    )
}
