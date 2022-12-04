import express from 'express'
import { logoutAll, signIn, signOut, signUp } from "../controllers/user.controller.js";
import { auth } from '../middlewares/auth.js';

const router = express.Router()

router.post('/signup', signUp)

router.post('/signin', signIn)

router.post('/logout', auth, signOut)

router.post('/logoutAll', auth, logoutAll)

export default router