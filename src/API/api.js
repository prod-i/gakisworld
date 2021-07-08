import * as axios from 'axios';

const API_KEY = '187e3a62'
const instans = axios.create({
    baseURL: 'http://www.omdbapi.com/',
    apikey: '187e3a62',

});
export const API = {
    getSerials(s) {
        return instans.get(`?s=${s}&apikey=${API_KEY}`)
    },
};