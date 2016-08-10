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

// Environment needs 
/**
 * 
 * mongodb:  docker run -d -p 27017 mongo:3.0
 * redis:    docker run -d -P --name rediscache redis:3.0 
 * node:     docker run -it --rm -v $PWD:/usr/src/app -w /usr/src/app -p 3000 node:0.12 npm start
 * 
 * Ver docker-machine ip
 * docker-machine ip
 * 
 * Enter to container
 * docker exec -it rediscache redis-cli
 * 
 * STOP/REMOVE containers
 * 
 * docker stop [container]
 * docker rm [container]
 * 
 */