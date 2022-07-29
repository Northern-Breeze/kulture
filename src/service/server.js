import Axios from './network';

const server = {
    register: (data) => Axios.post('/auth/register', data),
    verify: (data) => Axios.post('/auth/verify', data),
    login: (data) => Axios.post('/auth/login', data),
    updateProfileImage: (data) => Axios.post('/profile/update-image', data),
    getAllPost: ({ page, size}) => Axios.get(`/post?page=${page}&size=${size}`),
    forgotPassword: (data) => Axios.post('/auth/forgotpasswordrequest', data),
    changePassword: (data) => Axios.post('/auth/changepassword', data),
    likeAPost: (data) => Axios.post('/likes/add', data),
    getMostLiked: () => Axios.get('/likes/likes'),
    // users
    getProfile: () => Axios.get('/profile'),
    getProfileAccount: ({ userId }) => Axios.get(`/profile/user?userId=${userId}`),
    searchUsers: ({ name }) => Axios.get(`/profile/users?name=${name}`),
    followUser: ({ userId }) => Axios.post(`/profile/users/follow?userId=${userId}`)
}

export default server;