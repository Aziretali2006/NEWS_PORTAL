import axios from "axios";

const baseURL = "http://localhost:5000/api";

export const instance = axios.create({
  baseURL: baseURL,
});


instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  if(token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
});