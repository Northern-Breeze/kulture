import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

// Store
import Store from './src/store/model';

//components
import Routes from './src/routes/Routes';
import linking from './linking'

import { createStore, StoreProvider as Provider } from 'easy-peasy';

const store = createStore(Store);


const App = ()  => {
  
  React.useEffect(() => {
    SplashScreen.hide()
  },[]);

  return (
    <Provider store={store}>
      <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
          <Routes />
      </NavigationContainer>
    </Provider>
  );
};


export default App;
