require('dotenv').config()
const User = require('../models/users')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const decoded = jwt.verify(req.headers.authentication, process.env.SECRET_TOKEN)
  if (decoded) {
    User.findOne({ email: decoded })
      .then(userData => {
        if (userData) {
          req.user = userData
          next()
        } else res.status(401).send({ message: "Unauthorized!" })
      })
      .catch(err => res.status(500).send(err))
  } else {
    res.status(401).send({ message: "Unauthorized!" })
  }
}