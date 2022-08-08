import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {
  Actions,
  createStore,
  StoreProvider as Provider,
  useStoreActions,
} from 'easy-peasy';
import analytics from '@react-native-firebase/analytics';
import messaging from '@react-native-firebase/messaging';

import {Model} from './src/store/model';

import FlashMessage from 'react-native-flash-message';
import * as Sentry from '@sentry/react-native';

// Store
import Store from './src/store/model';
//components
import Routes from './src/routes/Routes';

const store = createStore(Store);

Sentry.init({
  dsn: 'https://6cb908ee0a3c4f06897a13b16bdb84c3@o1229278.ingest.sentry.io/6595975',
});

export const RootWrapper: React.FC = () => {
  const routeNameRef = React.useRef<any>();
  const navigationRef = React.useRef<any>();

  const addUnSeenNotification = useStoreActions(
    (action: Actions<Model>) => action.addUnSeenNotification,
  );

  React.useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      const notification = JSON.parse(remoteMessage.data?.payload || '');
      if (notification) {
        addUnSeenNotification(notification);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef?.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef?.current.getCurrentRoute().name;

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

  return (
    <Provider store={store}>
      <RootWrapper />
      <FlashMessage position="top" />
    </Provider>
  );
};

export default Sentry.wrap(App);
