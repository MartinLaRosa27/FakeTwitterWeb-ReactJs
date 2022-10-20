const jwt = require("jsonwebtoken");
const shortId = require("shortid");
const bcrypt = require("bcrypt");
const Usuario = require("../models/Usuario.js");

exports.postUsuario = async (req, res) => {
  const { nombre, apellido, email, password } = req.body;
  try {
    await Usuario.create({
      _id: shortId.generate(),
      nombre: nombre,
      apellido: apellido,
      email: email.toLowerCase(),
      password: password,
    });
    res.status(201).json({ mensaje: "Usuario registrado con exito" });
  } catch (e) {
    res.status(400).json({ mensaje: e.errors[0].message });
  }
};

exports.verificarUsuario = async (req, res, next) => {
  const { email, password } = req.body;
  const usuario = await Usuario.findOne({
    where: {
      email,
    },
  });
  if (!usuario) {
    await res.status(401).json({ mensaje: "Email incorrecto" });
    next();
  } else {
    if (!bcrypt.compareSync(password, usuario.password)) {
      await res.status(401).json({ mensaje: "Contraseña incorrecta" });
      next();
    } else {
      const token = jwt.sign(
        {
          _id: usuario._id,
          nombre: `${usuario.nombre} ${usuario.apellido}`,
        },
        "LLAVESECRETA",
        {
          expiresIn: "1h",
        }
      );
      res.json({ token });
    }
  }
};

