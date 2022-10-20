const { Op } = require("sequelize");
const shortId = require("shortid");
const Usuario = require("../models/Usuario.js");
const RelacionUsuario = require("../models/RelacionUsuario.js");

exports.getUsuario = async (req, res) => {
  const usuario = await Usuario.findAll({
    where: { nombre: { [Op.like]: `%${req.params.nombre}%` } },
  });
  res.send(usuario);
};

exports.postRelacionUsuario = async (req, res) => {
  const { user1, user2 } = req.body;
  const iCount = await RelacionUsuario.count({
    where: {
      usuarioId1: user1,
      usuarioId2: user2,
    },
  });
  if (iCount > 0) {
    res.status(400).json({ mensaje: "Relación ya existente" });
  } else {
    try {
      await RelacionUsuario.create({
        _id: shortId.generate(),
        usuarioId1: user1,
        usuarioId2: user2,
      });
      res.status(201).json({ mensaje: "Relación creada" });
    } catch (e) {
      res.status(400).json({ mensaje: "No se pudo crear la relación" });
    }
  }
};
