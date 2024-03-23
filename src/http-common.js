import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "multipart/form-data",
    "Authorization": `Bearer ${localStorage.getItem('token')? localStorage.getItem('token') : sessionStorage.getItem('token')}`
  },
});

export default apiClient;