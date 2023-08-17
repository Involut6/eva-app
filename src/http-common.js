import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem('token')? localStorage.getItem('token') : sessionStorage.getItem('token')}`
    // "Authorization": localStorage.getItem('token')
  },
});

export default apiClient;