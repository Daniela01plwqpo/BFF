require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.Nombre, process.env.DB_user, process.env.DB_clave, {
    host: 'localhost',
    dialect: 'postgres'
}
);

module.exports = sequelize;