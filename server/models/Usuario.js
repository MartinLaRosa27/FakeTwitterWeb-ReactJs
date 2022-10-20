const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const dataBase = require("../config/database.js");
const Tweet = require("./Tweet.js");

const Usuario = dataBase.define("usuario", {
  _id: {
    type: Sequelize.STRING(16),
    primaryKey: true,
    allowNull: false,
  },

  nombre: {
    type: Sequelize.STRING(50),
    allowNull: false,
    validate: {
      len: {
        args: [3, 50],
        msg: "El nombre ingresado debe tener entre 3 y 50 caracteres",
      },
      notEmpty: {
        args: true,
        msg: "El nombre ingresado no pude ir vacio",
      },
    },
  },

  apellido: {
    type: Sequelize.STRING(50),
    allowNull: false,
    validate: {
      len: {
        args: [3, 50],
        msg: "El apellido ingresado debe tener entre 3 y 50 caracteres",
      },
      notEmpty: {
        args: true,
        msg: "El apellido ingresado no pude ir vacio",
      },
    },
  },

  email: {
    type: Sequelize.STRING(255),
    allowNull: false,
    validate: {
      len: {
        args: [5, 255],
        msg: "El email ingresado debe tener entre 5 y 255 caracteres",
      },
      notContains: {
        args: " ",
        msg: "No puede haber espacios en blanco en el email ingresado",
      },
      notEmpty: {
        args: true,
        msg: "El email ingresado no pude ir vacio",
      },
    },
    unique: {
      args: true,
      msg: "El email ingrasado se encuentra registrado",
    },
  },

  password: {
    type: Sequelize.STRING(60),
    allowNull: false,
    validate: {
      len: {
        args: [8, 25],
        msg: "El password ingresado debe tener entre 8 y 25 caracteres",
      },
      notContains: {
        args: " ",
        msg: "No puede haber espacios en blanco en el password ingresado",
      },
      notEmpty: {
        args: true,
        msg: "El password ingresado no pude ir vacio",
      },
    },
  },
});

Usuario.hasMany(Tweet);

Usuario.afterValidate(async (user) => {
  const password = await bcrypt.hash(user.password, 10);
  user.password = password;
});

module.exports = Usuario;
