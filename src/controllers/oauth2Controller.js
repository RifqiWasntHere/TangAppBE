const db = require('../config/firestore')
const { getUserByEmail, addUser } = require('../models/userModel')
const { generateToken } = require('../utils/jwtUtils')

exports.oauth2Callback = async (req, res, error) => {
  try {
    const { user } = req

    const userExists = await getUserByEmail(user.emails[0].value)

    if (!userExists) {
      await addUser(user)
      return res.status(200).json({
        message: 'Account created successfully',
      })
    }

    const token = await generateToken({ user })

    return res.status(200).json({
      token: token,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'error' })
  }
}

// module.exports = { oauth2Callback }
