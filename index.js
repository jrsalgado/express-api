var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// var session = require("express-session");
// var RedisStore = require("connect-redis")(session);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// WEBAPP
app.use('/', require('./app'))

// API
app.use('/api', require('./api'))

app.listen(3000);