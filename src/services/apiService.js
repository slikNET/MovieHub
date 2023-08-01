import axios from "axios";

import {baseURL, token} from "../constants";

const apiService = axios.create({
    baseURL,
    method: 'GET',
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
    }
})

export {apiService}