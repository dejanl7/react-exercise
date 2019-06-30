import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-770c5.firebaseio.com/'
});



export default instance;