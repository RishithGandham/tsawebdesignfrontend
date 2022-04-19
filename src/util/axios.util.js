import axios from 'axios';

const authInstance = axios.create({
    baseURL: 'http://localhost:5000',
})

axios.interceptors.request.use((config) => {
    config.url = "".concat('http://localhost:5000', config.url);
    return config;
}, (error) => {
    return Promise.reject(error);
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

    return Promise.reject(error);
});

authInstance.interceptors.response.use((response) => {
    // console.log(response);
    return response;
}, (error) => {
    // console.log(error);
    if([403, 401].includes(error.response.status)) {
        localStorage.removeItem('token');
        localStorage.removeItem('user')
        localStorage.removeItem('userName')
        window.location.href = '/#/login';
    }
    return Promise.reject(error);
});

export default authInstance;