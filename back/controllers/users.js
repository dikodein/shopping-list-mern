require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/users')

const encryptPassword = require('../helpers/encryptPassword')

class UserController {
  static register (req, res) {
    let user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: encryptPassword(req.body.password)
    })
    user.save()
      .then(() => {
        res.send({ message: 'User successfully registered!' })
      })
      .catch(err => {
        res.status(500).send(err)
      })
  }

  static login (req, res) {
    User.findOne({ email: req.body.email })
      .then(userData => {
        if (userData) {
          const samePassword = bcrypt.compareSync(req.body.password, userData.password)
          if (samePassword) {
            const token = jwt.sign(userData.email, process.env.SECRET_TOKEN)
            res.send({ token, message: "Login Success" })
          } else res.status(404).send({ message: "Email or password is wrong!" })
        } else {
          res.status(404).send({ message: "Email or password is wrong!" })
        }
      })
      .catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
  }

  static getUser (req, res) {
    res.send(req.user)
  }
}

module.exports = UserController