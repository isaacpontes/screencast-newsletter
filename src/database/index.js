const { Sequelize } = require('sequelize');

const DB_NAME = 'newsletter_development';
const DB_USER = 'isaac';
const DB_PASS = '123456';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;