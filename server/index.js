import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
dotenv.config()
import { UserRouter } from './routes/user.js'

const app = express()
app.use(express.json())
app.use(cors({
  origin: [process.env.FRONTENDURL],
  credentials: true
}))
app.use(cookieParser())
app.use('/auth',UserRouter)


mongoose.connect(process.env.MONGOURI)

app.listen(process.env.PORT,()=>{
  console.log("Server is running")
})