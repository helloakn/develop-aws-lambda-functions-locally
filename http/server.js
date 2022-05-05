const express = require('express')

express.application.prefix = express.Router.prefix = function (path, configure) {
  const router = express.Router()
  this.use(path, router)
  configure(router)
  return router
}

const app = express()

app.use(express.json())

app.use(
  express.urlencoded({
    extended: true
  })
)

app.get('/', function (req, res) {
  res.send('Hello World')
})

require('./routes/generateroute.js')(app)

module.exports.httpServer = app
