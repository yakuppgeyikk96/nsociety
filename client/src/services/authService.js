import axiosClient from "./axios"

export const signIn = async (email, password) => {
  const { data } = await axiosClient.post('/user/signin', {
    email, password
  })

  return data;
}