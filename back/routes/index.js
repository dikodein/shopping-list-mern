const route = require('express').Router()
const userRoute = require('./users')

route.use('/', userRoute)

module.exports = route