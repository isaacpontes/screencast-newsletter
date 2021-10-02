const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Subscriber = sequelize.define('Subscriber', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

module.exports = Subscriber;