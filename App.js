import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Store from './src/store/model';
import linking from './linking'
import Routes from './src/routes/Routes';

import {  createStore, StoreProvider as Provider, persist } from 'easy-peasy';

const store = createStore(Store);


const App = ()  => {
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
          <Routes />
      </NavigationContainer>
    </Provider>
  );
};


export default App;
