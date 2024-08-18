import axios from "axios";

const goitApi = axios.create({
    baseURL: 'https://connections-api.goit.global/',
});

const setToken = (token) => {
    goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
    goitApi.defaults.headers.common.Authorization = '';
}

export { goitApi, setToken, clearToken };