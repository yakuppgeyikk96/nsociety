import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  text: String,
  image: Buffer,
  likes: {
    type: Number,
    default: 0
  },
  comments: {
    type: Number,
    default: 0
  },
  likesFrom: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    default: []
  },
  commentsFrom: {
    type: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true
        },
        text: {
          type: String,
          required: true
        }
      }
    ],
    default: []
  }
}, {
  timestamps: true
})

const Post = mongoose.model('Post', postSchema)

export default Post