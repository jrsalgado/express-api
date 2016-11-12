
exports.up = function(knex, Promise) {
  return knex.schema.createTable('todos', function (table) {
    table.increments().primary();
    table.string('title');
    table.boolean('completed');
    table.integer('categories_id').references('id').inTable('categories');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('todos');
};