var express = require('express')
var router = express.Router()
var passport = require('passport')

var User = require('./userDb')


router.post('/', passport.authenticate('local'), (req, res) => {
  console.log("got logged");
  res.json(req.user)
})

module.exports = router
