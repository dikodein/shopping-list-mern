const route = require('express').Router()
const userRoute = require('./users')
const shoplistRoute = require('./shoppingList')

route.use('/', userRoute)
route.use('/', shoplistRoute)

module.exports = route