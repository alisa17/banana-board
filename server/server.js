var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')
var passport = require('./passport')

var session = require('express-session')

var taskRoutes = require('./taskRoutes')
var projectRoutes = require('./projectRoutes')
var loginRoute = require('./loginRoute')


const corsOptions = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  credentials: true
}


var server = express()
server.use(cors(corsOptions))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))


server.use('/api/tasks', taskRoutes)
server.use('/api/projects', projectRoutes)
server.use('/login', loginRoute)

passport(server)

module.exports = (db) => {
  server.set('connection', db)
  return server
}
