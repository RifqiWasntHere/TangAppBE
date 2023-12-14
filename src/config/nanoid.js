const { nanoid } = require('nanoid')

const generateId = (length = 10) => {
  return nanoid(length)
}

module.exports = generateId
