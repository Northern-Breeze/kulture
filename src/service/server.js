import Axios from './network';

const server = {
    register: (data) => Axios.post('/auth/register', data),
    verify: (data) => Axios.post('/auth/verify', data),
    login: (data) => Axios.post('/auth/login', data),
}

export default server;