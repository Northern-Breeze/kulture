import {action, thunk, Action, Thunk} from 'easy-peasy';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Model {
  isloggedIn: boolean;
  token: string;
  loginCallback: Thunk<this, any>;
  setIsLoggin: Action<this, any>;
  login: Action<this, any>;
}

const model: Model = {
  isloggedIn: false,
  token: '',
  loginCallback: thunk(async (actions, payload) => {
    await AsyncStorage.setItem('token', payload);
    actions.login(payload);
  }),
  setIsLoggin: action((state, payload) => {
    const oldState = state;
    oldState.isloggedIn = payload;
  }),
  login: action((state, payload) => {
    const oldState = state;
    oldState.isloggedIn = true;
    oldState.token = payload;
  }),
};

export default model;
