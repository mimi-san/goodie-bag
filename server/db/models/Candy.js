const Sequelize = require('sequelize');
const db = require('../database');

const Candy = db.define('candy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
  },
  quantity: {
    type: Sequelize.INTEGER,
    max: 10,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: true,
  }
});

module.exports = Candy
