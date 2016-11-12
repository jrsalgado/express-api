// Update with your config settings.

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
      tableName: 'knex_migrations',
      directory: './migrations'
    }
  },
  custom: {
    client: 'pg',
    connection: {
      host: '192.168.99.100',
      port: '5432',
      database: 'todolist',
      user: 'todolist',
      password: 'todolist'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    }
  },
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
