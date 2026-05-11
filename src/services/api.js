import axios from "axios";

// axios base setup
// yahan se poori app APIs control hongi

const api = axios.create({

  baseURL: import.meta.env.VITE_API_BASE_URL,

  headers: {
    "Content-Type": "application/json",
  },
});

// request interceptor
// automatically token attach hoga

api.interceptors.request.use(

  (config) => {

    const token = localStorage.getItem("access_token");

    if (token) {

      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {

    return Promise.reject(error);
  }
);

// response interceptor
// token expire ya errors handle karenge

api.interceptors.response.use(

  (response) => response,

  (error) => {

    // unauthorized handling

    if (error.response?.status === 401) {

      localStorage.removeItem("access_token");

      localStorage.removeItem("role");

      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;