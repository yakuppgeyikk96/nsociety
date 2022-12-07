import axiosClient from "./axios"

export const signIn = async (email, password) => {
  const { data } = await axiosClient.post('/user/signin', {
    email, password
  })

  return data;
}

export const signOut = async () => {
  const { data } = await axiosClient.post('/user/logout', {})

  return data;
}