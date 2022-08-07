import * as React from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {
  createStore,
  StoreProvider as Provider,
} from 'easy-peasy';
import analytics from '@react-native-firebase/analytics';
import messaging from '@react-native-firebase/messaging';

import FlashMessage from "react-native-flash-message";
import * as Sentry from "@sentry/react-native";

// Store
import Store from './src/store/model';
//components
import Routes from './src/routes/Routes';

const store = createStore(Store)


Sentry.init({
  dsn: "https://6cb908ee0a3c4f06897a13b16bdb84c3@o1229278.ingest.sentry.io/6595975",
});

export const RootWrapper: React.FC = () => {

  const routeNameRef = React.useRef<any>();
  const navigationRef = React.useRef<any>();

    return (
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current = navigationRef?.current.getCurrentRoute().name
        }}
        onStateChange={async () => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName = navigationRef?.current.getCurrentRoute().name

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
};

const App = () => {

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  React.useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log(remoteMessage);
    });

    return unsubscribe;
  }, []);

  return (
    <Provider store={store}>
      <RootWrapper />
      <FlashMessage position="top" />
    </Provider>
  );
};

export default Sentry.wrap(App);
