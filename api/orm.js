var config = require('../knexfile').development;

var db = require('knex')(config);

var Bookshelf = require('bookshelf')(db);

module.exports = Bookshelf;