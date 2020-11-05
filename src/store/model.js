import { action } from "easy-peasy";

export default {
    isloggedIn: false,
    token: '',
    login: action((state) => {
        state.isloggedIn = true;
    })
}