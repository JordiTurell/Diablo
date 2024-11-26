const { Sequelize } = require('sequelize');
const config = require('./config.json')['development']; // Ajusta al entorno adecuado

const sequelize = new Sequelize({
    dialect: 'sqlite',
  storage: './database.sqlite',
  logging: console.log,
});

module.exports = sequelize;