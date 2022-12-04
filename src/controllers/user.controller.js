import {
  checkAuthByEmailAndPassword,
  removeToken,
  removeAllToken,
  saveUser
} from "../services/user.service.js";
import { Response } from '../models/common.js'
import { createSignInResponse, createSignupResponse } from "../utils/responseHelpers.js";

export const signUp = async (req, res) => {
  const user = req.body;
  let response;

  try {
    const data = await saveUser(user)

    response = createSignupResponse(data.user, data.token)

    res.status(response.status).send(response)
  } catch (error) {
    if (error.code === 11000) {
      response = new Response(409, "Email already taken!", null)
      res.status(409).send(response)
    }
    else {
      response = new Response(500, "Internal error!", null)
      res.status(500).send(response)
    }
  }
}

export const signIn = async (req, res) => {
  let response
  try {
    const { email, password } = req.body

    const { user, passwordMatch, token } = await checkAuthByEmailAndPassword(email, password)

    response = createSignInResponse(user, passwordMatch, token)

    res.status(response.status).send(response)
  } catch (error) {
    response = new Response(500, 'Internal error!', null)
    res.status(500).send(response)
  }
}

export const signOut = async (req, res) => {
  const { user, token } = req
  let response
  try {
    const result = await removeToken(user._id, token)

    if (!result) {
      response = new Response(404, 'Session not found!', null)
      return res.status(404).json(response)
    }

    response = new Response(200, 'Session closed successfully!', null)
    res.status(200).json(response)
  } catch (error) {
    response = new Response(500, 'Internal error!', null)
    res.status(500).send(response)
  }
}

export const logoutAll = async (req, res) => {
  const userId = req.user._id
  let response;

  try {
    const result = await removeAllToken(userId)

    if (!result) {
      response = new Response(404, 'Session not found!', null)
      return res.status(404).json(response)
    }

    response = new Response(200, 'All sessions closed successfully!', null)
    res.status(200).send(response)
  } catch (error) {
    response = new Response(500, 'Internal error!', null)
    res.status(500).send(response)
  }
}