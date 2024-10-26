import axios from "axios";
export const API_URl = 'http://localhost:8000'

export const $api = axios.create({
  withCredentials: true,
  baseURL: API_URl,
  validateStatus: (status) => status >= 200 && status <= 500
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})