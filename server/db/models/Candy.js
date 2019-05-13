const Sequelize = require('sequelize');
const db = require('../database');

const Candy = db.define('candy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}

  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true},
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {max: 10}
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://d.ibtimes.co.uk/en/full/1409516/how-fix-error-update-package-missing-systemimg-android-50-factory-images-nexus-devices.jpg'
  }
});

module.exports = Candy
