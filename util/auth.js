const jwt = require("jsonwebtoken")


const createJwtToken = (user) => {
  return jwt.sign({ user }, "12345",{ expiresIn: '1h' })
}

module.exports = { createJwtToken }