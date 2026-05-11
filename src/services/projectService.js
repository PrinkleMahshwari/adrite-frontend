import api from "./api";

// project APIs
// projects listing aur management ke liye

// get all projects

export const getProjects = async (
  page = 1,
  limit = 10,
  search = ""
) => {

  const response = await api.get(
    `/projects?page=${page}&limit=${limit}&search=${search}`
  );

  return response.data;
};

// get single project

export const getProjectById = async (id) => {

  const response = await api.get(
    `/projects/${id}`
  );

  return response.data;
};

// create project

export const createProject = async (
  projectData
) => {

  const response = await api.post(
    "/projects",
    projectData
  );

  return response.data;
};