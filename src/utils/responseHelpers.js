import { Response } from '../models/common.js'

export const createSignInResponse = (user, passwordMatch, token) => {
  if (!user) {
    return new Response(404, 'Email was not found!', null)
  }

  if (!passwordMatch) {
    return new Response(404, 'Password doesn\'t match', null)
  }

  if (user && passwordMatch) {
    return new Response(200, 'Signed in successfully!', { user, token })
  }
}

export const createSignupResponse = (user, token) => {
  if (!user) {
    return new Response(404, 'User not found!', null)
  }

  if (!token) {
    return new Response(500, 'Token has not been created!', null)
  }

  return new Response(200, 'Signed up successfully', { user, token })
}