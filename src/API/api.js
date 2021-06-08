import * as axios from 'axios';

const instans = axios.create({
    withCredentials: true,
    baseURL: '',
    headers: {
        'API-KEY': '',
    },
});

export const profileAPI = {
    
};