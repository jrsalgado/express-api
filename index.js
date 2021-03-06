var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// var session = require("express-session");
// var RedisStore = require("connect-redis")(session);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API
app.use('/api', require('./api'))

// WEBAPP
app.use('/', require('./app'))

app.listen(3000);