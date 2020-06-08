const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

// Q how this gonna find "user" named schema from mongoose which is declared in /User
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    return done(null, user.id);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existinguser = await User.findOne({ goodleId: profile.id });
      if (existinguser) {
        // user already exist
        // here the first argument null indication that there is no error
        done(null, exestingUser);
      } else {
        // dont have user with this id, create one
        const newUser = await new User({ googleId: profile.id }).save();
        done(null, newUser);
      }
    }
  )
);
