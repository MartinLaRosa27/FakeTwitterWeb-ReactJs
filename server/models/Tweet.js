const Sequelize = require("sequelize");
const dataBase = require("../config/database.js");

const Tweet = dataBase.define("tweet", {
  _id: {
    type: Sequelize.STRING(16),
    primaryKey: true,
    allowNull: false,
  },

  contenido: {
    type: Sequelize.STRING(140),
    allowNull: false,
    validate: {
      len: {
        args: [1, 140],
        msg: "El contenido del mensaje debe tener entre 1 y 140 caracteres",
      },
      notEmpty: {
        args: true,
        msg: "El contenido del mensaje no pude ir vacio",
      },
    },
  },

});

module.exports = Tweet;
