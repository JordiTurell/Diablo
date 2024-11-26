// models/index.js
const fs = require('fs');
const path = require('path');
const sequelize = require('../config/database');
const { Sequelize } = require('sequelize');

const db = {};
const basename = path.basename(__filename);

// Leer todos los archivos en la carpeta `models`
fs.readdirSync(__dirname)
  .filter((file) => file !== basename && file.endsWith('.js')) // Excluye index.js y no JS
  .forEach((file) => {
    
    const model = require(path.join(__dirname, file))(sequelize); // Carga cada modelo
    db[model.name] = model;
  });

// Configurar asociaciones entre modelos si las hay
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;