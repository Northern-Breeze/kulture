import Axios from './network';

const server = {
    register: (data) => Axios.post('/auth/register', data),
    verify: (data) => Axios.post('/auth/verify', data),
    login: (data) => Axios.post('/auth/login', data),
    getProfile: () => Axios.get('/profile'),
    updateProfileImage: (data) => Axios.post('/profile/update-image', data),
    getAllPost: ({ page, size}) => Axios.get(`/post?page=${page}&size=${size}`),
    forgotPassword: (data) => Axios.post('/auth/forgotpasswordrequest', data),
    changePassword: (data) => Axios.post('/auth/changepassword', data),
    likeAPost: (data) => Axios.post('/likes/add', data),
    getMostLiked: () => Axios.get('/likes/likes')
}

export default server;