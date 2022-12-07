import axios from "axios";
import { deleteItem, getItem } from "../utils/localStorageHelper";

const axiosClient = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json'
  },
  responseType: 'json',
  validateStatus: false
})

axiosClient.interceptors.request.use((request) => {
  const { url, headers } = request;
  const token = getItem("token");

  if (url === '/user/signin') return request;

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;

    return request;
  }
});

axiosClient.interceptors.response.use((response) => {
  if (response.status === 401) {
    deleteItem("token")
    deleteItem("user")
    window.location.reload()
  }

  return response
})

export default axiosClient