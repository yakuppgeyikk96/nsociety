import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

export const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findOne({ _id: decoded._id })

    if (!user) {
      throw new Error('USER_NOT_FOUND')
    }

    req.token = token
    req.user = user
    next()
  } catch (error) {
    res.status(401).send({
      error: 'Please authenticate'
    })
  }
}