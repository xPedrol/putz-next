import Axios from 'axios';
import Cookies from 'js-cookie';

const api = Axios.create({
    baseURL: process.env.API_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});
api.interceptors.request.use(function (config) {
    const authToken = Cookies.get(process.env.AUTH_TOKEN_ADRESS ?? '');
    if (authToken && !config.headers!.Authorization) {
        config.headers!.Authorization = `Bearer ${authToken}`;
        // api.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
    }
    // Faz alguma coisa antes da requisição ser enviada
    return config;
}, function (error) {
    // Faz alguma coisa com o erro da requisição
    return Promise.reject(error);
});
export default api;