import Post from "../models/post.model.js"
import mongoose from "mongoose"

export const savePost = async (post) => {
  const newPost = new Post(post)
  await newPost.save()
  return newPost
}

export const getPostsByUserId = async (userId) => {
  const ObjectId = mongoose.Types.ObjectId
  const posts = await Post.find({ user: ObjectId(userId) })
  return posts
}