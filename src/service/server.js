import Axios from './network';

const server = {
    register: (data) => Axios.post('/auth/register', data),
    verify: (data) => Axios.post('/auth/verify', data),
    login: (data) => Axios.post('/auth/login', data),
    getProfile: () => Axios.get('/profile'),
    updateProfileImage: (data) => Axios.post('/profile/update-image', data),
    getAllPost: () => Axios.get('/post'),
    forgotPassword: (data) => Axios.post('/auth/forgotpasswordrequest', data),
}

export default server;