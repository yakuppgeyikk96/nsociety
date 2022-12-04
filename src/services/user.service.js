import User from '../models/user.model.js'

export const saveUser = async (user) => {
  const newUser = new User(user)
  await newUser.save()
  const jwtToken = await newUser.generateToken()
  return {
    user: newUser,
    token: jwtToken
  }
}

export const checkAuthByEmailAndPassword = async (email, password) => {
  let token;
  const { user, passwordMatch } = await User.checkAuth(email, password)

  if (user && passwordMatch) {
    token = await user.generateToken()
  }
  return { user, passwordMatch, token }
}

export const removeToken = async (userId, token) => {
  const { modifiedCount } = await User.updateOne(
    { _id: userId },
    { $pull: { tokens: { token } } }
  )

  return modifiedCount !== 0
}

export const removeAllToken = async (userId) => {
  const { modifiedCount } = await User.updateOne(
    { _id: userId },
    { $set: { tokens: [] } }
  )

  return modifiedCount
}