import axios from "axios";
import { deleteItem } from "../utils/localStorageHelper";

const axiosClient = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json'
  },
  responseType: 'json',
  validateStatus: false
})

axiosClient.interceptors.response.use((response) => {
  if (response.status === 401) {
    deleteItem("token")
    deleteItem("user")
    window.location.reload()
  }

  return response
})

export default axiosClient