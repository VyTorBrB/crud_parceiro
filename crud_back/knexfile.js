// Update with your config settings.

module.exports = {
  client: 'postgresql',
  connection: {
    database: 'crud_app',
    user: 'crud_user',
    password: 'crud_user123'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};