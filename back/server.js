require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4000

const mongodbUri = process.env.MONGO_URI

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

// router
const router = require('./routes')
app.use('/', router)

// connect to mongo
mongoose
  .connect(mongodbUri, { useNewUrlParser: true })
  .then(() => {
    console.log('Mongodb connected on', mongodbUri)
  })
  .catch(err => {
    console.log(err)
  })

// start the engine
app.listen(port, err => {
  if (err) console.log(err)
  console.log('listening on port', port)
})