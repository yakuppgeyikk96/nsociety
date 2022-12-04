import mongoose from 'mongoose';

const connectToDatabase = async function () {
  const { DATABASE_URL, DATABASE_NAME } = process.env
  try {
    await mongoose.connect(`${DATABASE_URL}/${DATABASE_NAME}`)
    console.log('Connected Mongo Successfully')
  } catch (error) {
    console.log(error)
  }
}

export default connectToDatabase