import {action, thunk} from 'easy-peasy';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
  isloggedIn: false,
  token: '',
  loginCallback: thunk(async (actions, payload) => {
    await AsyncStorage.setItem('token', payload);
    actions.login();
  }),
  setIsLoggin: action((state, payload) => {
    const oldState = state;
    if(payload){
      oldState.isloggedIn = true;
    } else {
      oldState.isloggedIn = false;
    }
  }),
  login: action((state) => {
    const oldState = state;
    oldState.isloggedIn = true;
  }),
};
