import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { createStore, StoreProvider as Provider } from 'easy-peasy';

// Store
import Store from './src/store/model';
import storage from './src/store/storage/storage';
//components
import Routes from './src/routes/Routes';

const store = createStore(Store);


const App = ()  => {

  React.useEffect(() => {
    SplashScreen.hide()
  },[]);

  return (
    <Provider store={store}>
      <NavigationContainer>
          <Routes />
      </NavigationContainer>
    </Provider>
  );
};


export default App;
