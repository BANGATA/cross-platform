import axios from "axios";

const ENV = process.env.EXPO_PUBLIC_API_URL;

export const getUsers = () => {
  return axios.get(ENV + "users");
};

export const getPosts = () => {
  return axios.get(ENV + "posts");
};

export const getPostByID = (id: string) => {
  return axios.get(ENV + `posts/${id}`);
};

export const updatePostByID = (id: string, data: any) => {
  return axios.put(ENV + `posts/${id}`, data);
};

export const postData = (data: any) => {
  return axios.post(ENV + "posts", data);
};
