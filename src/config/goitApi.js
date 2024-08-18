import axios from "axios";

const goitApi = axios.create({
    baseURL: 'https://connections-api.goit.global/',
});

export { goitApi };