import axios from 'axios'

export const diet = axios.create({
    baseURL: 'http://localhost:9000/'
})