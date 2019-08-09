const route = require('express').Router()
const userController = require('../controllers/users')

// middleware
const authentication = require('../middleware/authentication')

route.post('/user/register', userController.register)
route.post('/user/login', userController.login)

route.get('/user', authentication, userController.getUser)

module.exports = route