const express = require('express')
const router = express.Router()

const testRoute = require('./testRoute')
router.use('', testRoute)

module.exports = router
