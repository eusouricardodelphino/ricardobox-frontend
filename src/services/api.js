import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ricardobox-backend.herokuapp.com',
});

export default api;