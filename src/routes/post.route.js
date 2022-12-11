import express from 'express'
import { createPost, getUserPosts } from '../controllers/post.controller.js'
import { auth } from '../middlewares/auth.js'

const router = express.Router()

router.post('/', auth, createPost)

router.get('/:userId', auth, getUserPosts)

export default router