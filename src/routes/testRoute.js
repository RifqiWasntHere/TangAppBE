const { Router } = require('express')
const { testCreate } = require('../controllers/testController')

const router = Router()

router.post('/test/create', testCreate)

module.exports = router
