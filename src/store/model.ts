import {action, thunk, Action, Thunk, computed, Computed} from 'easy-peasy';
import AsyncStorage from '@react-native-async-storage/async-storage';


export interface Notification {
  title: string;
  body: {
    title: string;
    body: string;
    imageUrl: string;
  };
  id: number;
  is_read: boolean;
  type: string;
  created_at: string;
}
export interface Model {
  isloggedIn: boolean;
  token: string;
  loginCallback: Thunk<this, any>;
  setIsLoggin: Action<this, any>;
  login: Action<this, any>;
  notifications: Notification[];
  unSeenNotifications: Notification[];
  hasNewNotifications: boolean;
  getNewNotificationCount: Computed<this, any>;
  resetUnSeenNotifications: Action<this>;
  addNotification: Action<this, Notification>;
  addNotifications: Action<this, Notification[]>;
  markReadNotification: Action<this, number>
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
  // Notifications
  // STATE --> NOTIFICATIONS
  notifications: [],
  unSeenNotifications: [],
  hasNewNotifications: false,
  getNewNotificationCount: computed(state => state.unSeenNotifications.length),
  // Actions --> notifications
  resetUnSeenNotifications: action((state) => {
    const oldState = state;
    oldState.unSeenNotifications = [];
  }),
  addNotification: action((state, payload) => {
    const oldState = state;
    oldState.notifications.push(payload);
  }),
    addNotifications: action((state, payload) => {
    const oldState = state;
    oldState.notifications = payload;
  }),
  markReadNotification: action((state, payload) => {
    const oldState = state;
    const index = oldState.notifications.findIndex((i) => i.id === payload);
    oldState.notifications[index] = {
      ...oldState.notifications[index],
      is_read: true
    }
  })
};

export default model;
