import Axios from './network';

const server = {
    // Auth
    register: (data) => Axios.post('/auth/register', data),
    verify: (data) => Axios.post('/auth/verify', data),
    login: (data) => Axios.post('/auth/login', data),
    getAllPost: ({ page, size}) => Axios.get(`/post?page=${page}&size=${size}`),
    changePassword: (data) => Axios.post('/auth/changepassword', data),
    forgotPassword: (data) => Axios.post('/auth/forgotpasswordrequest', data),
    // User profile
    updateProfileImage: (data) => Axios.post('/profile/update-image', data),
    getProfile: () => Axios.get('/profile'),
    // likes
    likeAPost: (data) => Axios.post('/likes/add', data),
    getMostLiked: () => Axios.get('/likes/likes'),
    getProfileAccount: ({ userId }) => Axios.get(`/profile/user?userId=${userId}`),
    // search
    searchUsers: ({ name }) => Axios.get(`/profile/users?name=${name}`),
    // Follow
    followUser: ({ userId }: { userId: number }) => Axios.post(`/profile/users/follow?userId=${userId}`),
    // users
    getAllUsers: ({ page, size}) => Axios.get(`/users/get-all-users?page=${page}&size=${size}`),
    getUseProfile: ({ userId }: { userId: number }) => Axios.get(`/users?userId=${userId}`),
    getUserPost: ({ userId }: { userId: number }) => Axios.get(`/users/posts/${userId}`),
}

export default server;