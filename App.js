import * as React from 'react';
import {View, Text} from 'react-native';
import {
  NavigationContainer,
} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {
  createStore,
  StoreProvider as Provider,
  persist,
  useStoreRehydrated,
} from 'easy-peasy';
import analytics from '@react-native-firebase/analytics';

// Store
import Store from './src/store/model';
import storage from './src/store/storage/storage';
//components
import Routes from './src/routes/Routes';

const store = createStore(
  persist(Store, {
    storage: storage,
  }),
);

export const RootWrapper = () => {
  const isHydrated = useStoreRehydrated();

  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();


  if (isHydrated) {
    return (
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current = navigationRef.current.getCurrentRoute().name
        }}
        onStateChange={async () => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName = navigationRef.current.getCurrentRoute().name

          if (previousRouteName !== currentRouteName) {
            await analytics().logScreenView({
              screen_name: currentRouteName,
              screen_class: currentRouteName,
            });
          }

          routeNameRef.current = currentRouteName;
        
        }}>
        <Routes />
      </NavigationContainer>
    );
  }
  return (
    <View>
      <Text>Loading ...</Text>
    </View>
  );
};

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <RootWrapper />
    </Provider>
  );
};

export default App;
