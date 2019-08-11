const route = require('express').Router()
const shoppingListController = require('../controllers/shoppingList')
const authentication = require('../middleware/authentication')

route.post('/shoplist', authentication, shoppingListController.createItem)

route.get('/shoplist/user', authentication, shoppingListController.getListFromUser)
route.get('/shoplist/:itemId', authentication, shoppingListController.getItem)

route.put('/shoplist/:itemId', authentication, shoppingListController.updateItem)

route.delete('/shoplist/:itemId', authentication, shoppingListController.deleteItem)

module.exports = route