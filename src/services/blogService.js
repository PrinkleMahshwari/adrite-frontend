import api from "./api";

// blog APIs
// admin blog management ke liye

// get blogs

export const getBlogs = async () => {

  const response = await api.get(
    "/blogs"
  );

  return response.data;
};

// create blog

export const createBlog = async (
  blogData
) => {

  const response = await api.post(
    "/blogs",
    blogData
  );

  return response.data;
};