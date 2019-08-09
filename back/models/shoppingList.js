const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)
const Schema = mongoose.Schema

const ShoppingListSchema = new Schema({
  name: {
    type: String,
    trim: true,
    minlength: 2,
    required: [true, "Please input the name"]
  },
  quantity: {
    type: Number,
    required: [true, "Please input the quantity"],
    min: 1
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
})

module.exports = mongoose.model("Shopping List", ShoppingListSchema)