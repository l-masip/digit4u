const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/User.model');


module.exports = (app) => {
  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    User.findById(id)
      .then((user) => cb(null, user))
      .catch((error) => cb(error));
  });

  // Local Strategy
  passport.use(
    new LocalStrategy(
      { passReqToCallback: true, usernameField:'email' },
      (req, email, password, next) => {
        User.findOne({ email })
          .then((user) => {
            if (!user) {
              return next(null, false, {
                message: 'Wrong email or password',
              });
            }

            if (bcrypt.compareSync(password, user.password)) {
              return next(null, user);
            } else {
              return next(null, false, {
                message: 'Wrong email or password',
              });
            }
          })
          .catch((error) => next(error));
      }
    )
  );

  // passport.use(
  //   'linkedin',
  //   new LinkedInStrategy(
  //     {
  //       clientID: process.env.clientID,
  //       clientSecret: process.env.clientSecret,
  //       callbackURL: process.env.callbackURL,
  //       scope: ['r_emailaddress', 'r_liteprofile'],
  //       state: true,
  //     },
  //     (accessToken, refreshToken, profile, done) => {
  //       console.log('Linkedin account:', profile);

  //       User.findOne({ linkedinID: profile.id })
  //         .then((profile) => {
  //           if (profile) {
  //             done(null, profile);
  //             return;
  //           }

  //           User.create({ linkedinID: profile.id, email: profile.user.email })
  //             .then((newUser) => {
  //               done(null, newUser);
  //             })
  //             .catch((error) => done(error));
  //         })
  //         .catch((error) => done(error));
  //     }
  //   )
  // );
  app.use(passport.initialize());
  app.use(passport.session());
}



