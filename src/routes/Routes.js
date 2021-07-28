import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {createStackNavigator} from '@react-navigation/stack';
import {useStoreState, useStoreActions} from 'easy-peasy';

import HomeRoute from './HomeRoutes';
import AuthRoute from './AuthRoutes';

const RootStack = createStackNavigator();

export default function Routes(props) {
  const {navigation} = props;
  const setIsLoggin = useStoreActions((actions) => actions.setIsLoggin);
  const isloggedIn = useStoreState((state) => state.isloggedIn);

  const checkToken = React.useCallback(async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        setIsLoggin(true);
      } else {
        setIsLoggin(false);
      }
    } catch (error) {
      console.log(error);
    }
  }, [isloggedIn]);

  React.useEffect(() => {
    checkToken();
  }, [checkToken]);

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isloggedIn ? (
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
