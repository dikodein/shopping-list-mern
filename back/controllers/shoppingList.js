const ShoppingList = require('../models/shoppingList')

class shoppingListController {
  static createItem (req, res) {
    let shoppingList = new ShoppingList({
      name: req.body.name,
      quantity: req.body.quantity,
      user_id: req.user._id
    })

    shoppingList.save()
      .then(() => {
        res.send({ message: "Item successfully created!" })
      })
      .catch(err => {
        res.status(500).send(err)
      })
  }

  static getListFromUser (req, res) {
    ShoppingList.find({ user_id: req.user._id })
      .then(items => res.send(items))
      .catch(err => res.send(err))
  }

  static updateItem (req, res) {
    const item_id = req.params.itemId
    const user_id = req.user._id

    // for authorization purpose
    const query = { _id: item_id, user_id }

    ShoppingList.findOneAndUpdate(query, req.body)
      .then(() => res.send({ message: "Item updated"}))
      .catch(err => res.send(err))
  }

  static deleteItem (req, res) {
    const item_id = req.params.itemId
    const user_id = req.user._id

    // for authorization purpose
    const query = { _id: item_id, user_id }

    ShoppingList.findOneAndDelete(query)
      .then(() => res.send({ message: "Item deleted" }))
      .catch(err => res.send(err))
  }
}

module.exports = shoppingListController