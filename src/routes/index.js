import express from 'express'
import postRouter from './post.route.js'
import userRouter from './user.route.js'

const rootRouter = express.Router()

rootRouter.use('/posts', postRouter)
rootRouter.use('/user', userRouter)

export default rootRouter