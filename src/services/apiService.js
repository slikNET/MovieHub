import axios from "axios";

const TOKEN = process.env.REACT_APP_TOKEN;
const baseURL = process.env.REACT_APP_BASEURL;

const apiService = axios.create({
    baseURL,
    method: 'GET',
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${TOKEN}`
    }
})

export {apiService}