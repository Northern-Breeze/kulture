import axios from 'axios';
import { configs } from '../config/config'
import AsyncStorage from '@react-native-async-storage/async-storage';
const baseURL = '';

const instance = axios.create({
  validateStatus: (status) => {
    let correct = false;

    if (status >= 200 && status < 300) {
      correct = true;
    } else if (
      status === 401 ||
      status === 400 ||
      status === 403 ||
      status === 503 ||
      status === 422
    ) {
      correct = true;
    }

    return correct;
  },
})

instance.interceptors.request.use(async config => {
    const user = await AsyncStorage.getItem('token') || "";
    const baseURL = `${configs.SERVER_URL}/api/v1`
    const token = user;
    if (config.url && config.url.charAt(0) === '/') {
      config.url = `${baseURL}${config.url}`;
    }
    config.headers.authorization = `Bearer ${token}`;
    config.headers['mobile-token'] = 'nrC^L9pjG)/4MZ>2';

    return config;
   }, error => Promise.reject(error));


   export default instance;