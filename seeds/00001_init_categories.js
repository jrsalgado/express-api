
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('categories').del(),

    // Inserts seed entries
    knex('categories').insert({id: 1, name: 'todos'}),
    knex('categories').insert({id: 2, name: 'home'}),
    knex('categories').insert({id: 3, name: 'work'})
  );
};
