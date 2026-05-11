import api from "./api";

// auth APIs
// login register logout yahan handle honge

export const loginUser = async (userData) => {

  const response = await api.post("/auth/login", userData);

  return response.data;
};

// register API

export const registerUser = async (userData) => {

  const response = await api.post("/auth/register", userData);

  return response.data;
};

// logout function

export const logoutUser = () => {

  localStorage.removeItem("access_token");

  localStorage.removeItem("role");
};