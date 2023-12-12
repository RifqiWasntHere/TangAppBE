const express = require('express')
const router = express.Router()

const authRoute = require('./authRoutes.js')
const testRoute = require('./testRoute')

router.use('', testRoute)
router.use('/auth', authRoute)

module.exports = router
