module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'db',
      database: 'todolist',
      user: 'todolist',
      password: 'todolist'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}