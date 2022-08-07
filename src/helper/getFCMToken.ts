import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

export default function getFCMToken() {
  return new Promise<string>((resolve, reject) => {
    messaging()
      .getToken()
      .then((token) => resolve(token))
      .catch((error) => reject(error));
  });
}
