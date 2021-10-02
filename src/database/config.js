module.exports = {
  development: {
    username: 'isaac',
    password: '123456',
    database: 'newsletter_development',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: 'root',
    password: null,
    database: 'newsletter_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: 'root',
    password: null,
    database: 'newsletter_production',
    host: '127.0.0.1',
    dialect: 'postgres'
  }
}