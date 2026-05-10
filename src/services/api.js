import axios from "axios";

// common axios setup
// future saari APIs isi file se call hongi

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// request interceptor
// har protected request me token automatically jayega

api.interceptors.request.use((config) => {

  const token = localStorage.getItem("access_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;