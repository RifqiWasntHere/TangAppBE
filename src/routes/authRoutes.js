const express = require('express')
const passport = require('passport')

const { oauth2Callback } = require('../controllers/oauth2Controller')

const router = express.Router()

router.get(
  '/oauth2',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)

router.get(
  '/oauth2/redirect',
  passport.authenticate('google', {
    failureRedirect: '/auth/oauth2/failure',
    session: false,
  }),
  oauth2Callback
)
module.exports = router
