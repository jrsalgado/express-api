
var bookshelf = require('../orm');
var todos = require('./todos');

module.exports = bookshelf.Model.extend({
  tableName: 'categories',
  todos: function () {
    return this.hasMany(todos)
  }
})
