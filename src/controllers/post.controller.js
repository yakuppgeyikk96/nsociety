import mongoose from "mongoose"
import { savePost, getPostsByUserId } from "../services/post.service.js"

export const createPost = async (req, res) => {
  const post = { user: req.user._id, ...req.body }

  try {
    const newPost = await savePost(post)
    res.status(201).send(newPost)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getUserPosts = async (req, res) => {
  const { userId } = req.params

  if (!mongoose.Types.ObjectId.isValid(userId))
    return res.status(404).send('No post with that id')

  try {
    const posts = await getPostsByUserId(userId)
    res.status(200).send(posts)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}