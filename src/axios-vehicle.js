import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://backend.daviva.lt/API/InformacijaTestui'
});

export default instance;