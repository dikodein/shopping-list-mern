const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)
const Schema = mongoose.Schema

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "Please input the firstName"]
  },
  lastName: {
    type: String,
    required: [true, "Please input the last name"]
  },
  email: { 
    type: String,
    required: [true, "Please input the email"],
    trim: true,
    lowercase: true,
    unique: [true, "This email is already exist"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address"
    ]
  },
  password: {
    type: String,
    required: [true, "Please input the password"]
  }
})

module.exports = mongoose.model("User", UserSchema)