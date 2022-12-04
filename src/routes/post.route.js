import express from 'express'
import { createPost, getUserPosts } from '../controllers/post.controller.js'

const router = express.Router()

router.post('/', createPost)

router.get('/:userId', getUserPosts)

export default router