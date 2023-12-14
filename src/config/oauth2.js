const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
require('dotenv').config()

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/oauth2/redirect',
    },
    function (accessToken, refreshToken, profile, done) {
      // Here, you can store user info to your database, if required.
      // For now, let's just pass the profile data.
      done(null, profile)
    }
  )
)
