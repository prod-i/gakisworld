import * as axios from 'axios';


const instans = axios.create({
    withCredentials: true,
    baseURL: 'http://www.omdbapi.com/',
});
export const API = {
    getSerials(s, apikey) {
        return instans.get(`?s=${s}&apikey=${apikey}`)
    },
};