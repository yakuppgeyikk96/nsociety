import axiosClient from "./axios";

export const getUserPosts = async (userId) => {
  const { data } = await axiosClient.get(`/posts/${userId}`);
  return data;
}