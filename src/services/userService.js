import api from "./api";

// users APIs
// admin/user management modules me use hoga

// get all users

export const getUsers = async () => {

  const response = await api.get("/users");

  return response.data;
};

// get single user

export const getUserById = async (id) => {

  const response = await api.get(`/users/${id}`);

  return response.data;
};

// create user

export const createUser = async (userData) => {

  const response = await api.post(
    "/users",
    userData
  );

  return response.data;
};

// update user

export const updateUser = async (
  id,
  userData
) => {

  const response = await api.put(
    `/users/${id}`,
    userData
  );

  return response.data;
};

// delete user

export const deleteUser = async (id) => {

  const response = await api.delete(
    `/users/${id}`
  );

  return response.data;
};