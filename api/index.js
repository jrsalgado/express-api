var express = require('express')
var apiApp = express()
var mongoose = require('mongoose');

mongoose.connect('localhost:27017');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

apiApp.use('/todo',require('./routes/todo'))

module.exports = apiApp