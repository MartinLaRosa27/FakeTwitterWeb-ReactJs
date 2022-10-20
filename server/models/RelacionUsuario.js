const Sequelize = require("sequelize");
const dataBase = require("../config/database.js");

const RelacionUsuario = dataBase.define("relacionUsuario", {
  _id: {
    type: Sequelize.STRING(16),
    primaryKey: true,
    allowNull: false,
  },

  usuarioId1: {
    type: Sequelize.STRING(16),
    allowNull: false,
  },

  usuarioId2: {
    type: Sequelize.STRING(16),
    allowNull: false,
  },
});

module.exports = RelacionUsuario;
