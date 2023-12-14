const jwt = require('jsonwebtoken')
require('dotenv').config()

const generateToken = async (payload) => {
  return jwt.sign(payload, process.env.TOKEN_KEY, {
    expiresIn: process.env.TOKEN_EXPIRE,
  })
}

const refreshToken = async (token) => {
  let payload = verifyToken(token)
  return jwt.sign(
    {
      phoneNumber: payload.phoneNumber,
      email: payload.email,
      name: payload.name,
      is_verified: payload.is_verified,
      is_registered: payload.is_registered,
    },
    process.env.TOKEN_KEY,
    {
      expiresIn: process.env.TOKEN_EXPIRE,
    }
  )
}
module.exports = { generateToken, refreshToken }
