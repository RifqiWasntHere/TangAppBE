const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oidc')
const db = require('../config/firestore')

const router = express.Router()

router.get('/login', function (req, res, next) {
  res.render('login')
})

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
  googleAuthCallback
)
module.exports = router
