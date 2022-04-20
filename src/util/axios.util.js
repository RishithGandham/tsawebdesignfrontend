import axios from 'axios';
import { NotificationManager } from 'react-notifications';

const authInstance = axios.create({
    baseURL: 'https://tsawebapp.herokuapp.com',
})

axios.interceptors.request.use((config) => {
    config.url = "".concat('https://tsawebapp.herokuapp.com', config.url);
    return config;
}, (error) => {
    return Promise.reject(error);
});

axios.interceptors.response.use(
    (response) => {  return response; },
    (error) => {
        console.log(error.response.status, ',', error.response.data);
        NotificationManager.error('', error.response.data );
    });



authInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `${token}`;
    } else {
        return config;
    }
    return config;
}, (error) => {
    //console log the errors message and status code

    return Promise.reject(error);
});

authInstance.interceptors.response.use((response) => {
    // console.log(response);
    return response;
}, (error) => {
    console.log(error.response.status, 'asdfasdf', error.response.data);
    NotificationManager.error(error.response.data, 'An Error Occured');

    // console.log(error);
    if ([403, 401].includes(error.response.status)) {
        localStorage.removeItem('token');
        localStorage.removeItem('user')
        localStorage.removeItem('userName')
        window.location.href = '/#/login';
        window.location.reload()
    }
    return Promise.reject(error);
});

export default authInstance;