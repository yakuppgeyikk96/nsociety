import express from 'express'
import dotenv from 'dotenv'
import rootRouter from './src/routes/index.js'
import connectToDatabase from './src/db/mongoose.js'
import cors from 'cors'

dotenv.config()

connectToDatabase()

const PORT = process.env.PORT || 8000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api', rootRouter)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

