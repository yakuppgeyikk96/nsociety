import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    maxLength: [10, 'The value must be less than 10 character']
  },
  description: {
    type: String,
    required: true,
    maxLength: [100, 'The value must be less than 100 character']
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  likes: {
    type: Number,
    default: 0
  },
  publisher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

const Post = mongoose.model('Post', postSchema)

export default Post