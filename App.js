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
import dynamicLinks from '@react-native-firebase/dynamic-links';
import analytics from '@react-native-firebase/analytics';

import createLink from './src/utils/generateLink'

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


  
  // const getAppLaunchLink = async () => {
  //   try {
  //     const {url} = await dynamicLinks().getInitialLink();
  //     //handle your link here
  //     console.log(url);
  //   } catch (error) {
  //     console.log(error);
  //     //handle errors
  //   }
  // };
  
  React.useEffect(() => {
    async () => {
      const value = await createLink('name', 'test');
    }
  },[]);

  // React.useEffect(() => {
  //   getAppLaunchLink();
  // }, []);
  
  React.useEffect(() => {
    const unsubscribeDynamicLinks = dynamicLinks().onLink(({url}) => {
      //handle your url here
      console.log(url);
    });

    return () => unsubscribeDynamicLinks();

  }, [])

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
