import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, 'Username is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid!')
      }
    },
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    trim: true,
    minLength: 7,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('Password cannot contain "password"')
      }
    },
  },
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ],
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }]
}, {
  timestamps: true
})

userSchema.methods.toJSON = function () {
  const user = this.toObject()
  delete user.password
  delete user.tokens

  return user
}

userSchema.methods.generateToken = async function () {
  const user = this

  const jwtSecret = process.env.JWT_SECRET
  const jwtToken = jwt.sign({ _id: user._id.toString() }, jwtSecret)

  user.tokens = user.tokens.concat({ token: jwtToken })

  await user.save()

  return jwtToken
}

userSchema.statics.checkAuth = async function (email, password) {
  const result = {
    user: null,
    passwordMatch: false
  }

  try {
    const user = await User.findOne({ email })
    result.user = user

    const isPasswordMatch = await bcrypt.compare(password, user.password)
    result.passwordMatch = isPasswordMatch

    return result
  }
  catch (err) {
    return result
  }
}

userSchema.pre('save', async function (next) {
  const user = this

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
  }

  next()
})

const User = mongoose.model('User', userSchema)

export default User