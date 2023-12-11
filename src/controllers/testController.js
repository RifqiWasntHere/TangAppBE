const generateId = require('../config/nanoid')
const { testCreate } = require('../models/test')

exports.testCreate = async (req, res) => {
  try {
    testCreate()
    return res.status(201).json('nice')
  } catch (error) {
    return next(error)
  }
}
