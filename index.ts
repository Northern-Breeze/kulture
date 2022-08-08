import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import Smartlook from 'smartlook-react-native-wrapper';
import secret from './src/config/secret';

if (secret.STAGE !== 'development') {
    Smartlook.setupAndStartRecording("d5f2081a5f3a1ac66191e756227e419025760268");
}

AppRegistry.registerComponent('kulture', () => App);