var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var User = require('./userDb')


module.exports = function (app) {
  let connection = app.get('connection')
  app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
  }));
  app.use(passport.initialize())
  app.use(passport.session())

  passport.serializeUser((user, done) => {
    console.log("serializing")
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    console.log("deserializing")
    done(null, 1)
    // User.findById(connection, id)
      // .then((user) => {
      //   done(null, user)
      // })
      // .catch(done)
  })

  passport.use(new LocalStrategy((username, password, done) => {
      console.log(username, password);
      // User.findByEmail(connection, email)
      //   .then((user) => {
      //     console.log({user});
      //     if (!user) {
      //       return done(null, false)
      //     }
      //     User.comparePasswords(user.hashedPassword, password)
      //       .then((isCorrect) => {
      //         if (!isCorrect) { return done(null, false) }
      //         return done(null, user)
      //       })
      //   })
      //   .catch(done)
    }
  ))

  return passport
}
