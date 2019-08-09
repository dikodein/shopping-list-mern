const bcrypt = require('bcrypt')
const saltRound = 10

function encryptPassword (password) {
  const result = bcrypt.hashSync(password, saltRound)
  return result
}

module.exports = encryptPassword