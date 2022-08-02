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

import FlashMessage from "react-native-flash-message";
import * as Sentry from "@sentry/react-native";

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


Sentry.init({
  dsn: "https://6cb908ee0a3c4f06897a13b16bdb84c3@o1229278.ingest.sentry.io/6595975",
});

export const RootWrapper: React.FC = () => {
  const isHydrated = useStoreRehydrated();

  const routeNameRef = React.useRef<any>();
  const navigationRef = React.useRef<any>();

  if (isHydrated) {
    return (
      <NavigationContainer
        // @ts-ignore
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
    // @ts-ignore
    <Provider store={store}>
      <RootWrapper />
      <FlashMessage position="top" />
    </Provider>
  );
};

export default Sentry.wrap(App);
