import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Store from './src/store/model';
import storage from './src/store/storage/storage';

import Routes from './src/routes/Routes';

import {  createStore, StoreProvider as Provider, persist } from 'easy-peasy';

// const store = createStore(
//   persist(Store, {
//     storage: storage,
//   })
// );

const store = createStore(Store);


const App = ()  => {
  const linking = {
    prefixes: ['https://app.example.com'],
  };
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
          <Routes />
      </NavigationContainer>
    </Provider>
  );
};


export default App;
