import express from 'express'
import postRouter from './routes/posts.js'
import userRouter from './routes/user.js'
import authRouter from './routes/auth.js'
import cors from "cors"
import { db } from './db.js'
const app = express()
app.use(express.json())
app.use(cors({
  origin: "*"
}))

app.use("/api/post", postRouter)
app.use("/api/auth", authRouter)
app.use('/api/users', userRouter)
// app.get("/test", (req, res) => {
//   res.json("It work")
// })

app.listen(8800, () => {
  console.log('connected')
})