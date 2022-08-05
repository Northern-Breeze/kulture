import Axios from './network';

const server = {
    // Auth
    register: (data: any) => Axios.post('/auth/register', data),
    verify: (data: any) => Axios.post('/auth/verify', data),
    login: (data: any) => Axios.post('/auth/login', data),
    getAllPost: ({ page, size}: { page: number, size: number }) => Axios.get(`/post?page=${page}&size=${size}`),
    changePassword: (data: any) => Axios.post('/auth/changepassword', data),
    forgotPassword: (data: any) => Axios.post('/auth/forgotpasswordrequest', data),
    // User profile
    updateProfileImage: (data: any) => Axios.post('/profile/update-image', data),
    getProfile: () => Axios.get('/profile'),
    // likes
    likeAPost: (data: any) => Axios.post('/likes/add', data),
    getMostLiked: () => Axios.get('/likes/likes'),
    getProfileAccount: ({ userId }: { userId: number }) => Axios.get(`/profile/user?userId=${userId}`),
    // search
    searchUsers: ({ name }: { name: string }) => Axios.get(`/profile/users?name=${name}`),
    searchHomeUsers: ({ name }: { name: string }) => Axios.get(`/users/search?name=${name}`),
    // Follow
    followUser: ({ userId }: { userId: number }) => Axios.post(`/profile/users/follow?userId=${userId}`),
    // users
    getAllUsers: () => Axios.get(`/users/get-all-users`),
    getUseProfile: ({ userId }: { userId: number }) => Axios.get(`/users?userId=${userId}`),
    getUserPost: ({ userId }: { userId: number }) => Axios.get(`/users/posts/${userId}`),
}

export default server;