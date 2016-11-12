
exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('todos').del(),

    // Inserts seed entries
    knex('todos').insert({ title: 'migration', completed: true, categories_id: 1 }),
    knex('todos').insert({ title: 'seed', completed: false, categories_id: 1 }),
    knex('todos').insert({ title: 'code', completed: false, categories_id: 1 })
  );
};
