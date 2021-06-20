import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {createStackNavigator} from '@react-navigation/stack';
import {useStoreState, useStoreActions} from 'easy-peasy';

import HomeRoute from './HomeRoutes';
import AuthRoute from './AuthRoutes';

const RootStack = createStackNavigator();

export default function Routes(props) {
  const isloggedin = useStoreState((state) => state.isloggedIn);
  const setIsLoggin = useStoreActions((actions) => actions.setIsLoggin);
  const checkToken = React.useCallback(() => {
    AsyncStorage.getItem('token')
      .then((token) => {
        setIsLoggin(token);
      })
      .catch((error) => console.log(error));
  }, []);
  React.useEffect(() => {
    checkToken();
  }, []);
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isloggedin ? (
        <RootStack.Screen
          name="Home"
          component={HomeRoute}
          options={{
            title: 'Feed',
          }}
        />
      ) : (
        <RootStack.Screen name="Auth" component={AuthRoute} />
      )}
    </RootStack.Navigator>
  );
}
