const express = require('express')
require('dotenv').config()
const app = express()
require('express-async-errors')
const cors = require('cors')
const recipesRouter = require('./controllers/recipes')
const loginRouter = require('./controllers/login')

const requestLog = (req, resp, next) => {
  console.log(`Method: ${req.method} - Path: ${req.path} - Body: `, req.body)
  next()
}

const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((err) => {
    console.log('error connecting to MongoDB', err.message)
  })

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())
app.use(requestLog)

app.use('/recipes', recipesRouter)
app.use('/login', loginRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
