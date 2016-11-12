
var bookshelf = require('../orm');
var categories = require('./categories');

module.exports = bookshelf.Model.extend({
  tableName: 'todos',
  categories: function () {
    return this.belongsTo(categories, 'categories_id')
  }
})
