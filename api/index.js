var express = require('express')
var apiApp = express()

apiApp.get('/', function (req, res) {
  res.send('ok')
})

apiApp.use('/todos', require('./routes/todo'))

module.exports = apiApp