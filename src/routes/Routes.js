import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {createStackNavigator} from '@react-navigation/stack';
import {useStoreState, useStoreActions} from 'easy-peasy';

import HomeRoute from './HomeRoutes';
import AuthRoute from './AuthRoutes';

const RootStack = createStackNavigator();

export default function Routes(props) {
  const setIsLoggin = useStoreActions((actions) => actions.setIsLoggin);
  const change = useStoreState((state) => state.isloggedIn);
  const checkToken = React.useCallback(() => {
    AsyncStorage.getItem('token')
      .then((response) => {
        if(response !== null){
          setIsLoggin(true);
        } else {
          setIsLoggin(false);
        }
      })
      .catch((error) => console.log(error));
  }, []);
  React.useEffect(() => {
    checkToken();
  }, [change]);
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {change ? (
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
