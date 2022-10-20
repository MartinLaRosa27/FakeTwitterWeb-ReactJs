const shortId = require("shortid");
const { QueryTypes } = require("sequelize");
const Tweet = require("../models/Tweet.js");
const Usuario = require("../models/Usuario.js");

exports.postTweet = async (req, res) => {
  const { usuarioId, contenido } = req.body;
  const usuario = await Usuario.findOne({
    where: {
      _id: usuarioId,
    },
  });
  if (!usuario) {
    await res.status(401).json({ mensaje: "El usuario no existe" });
  }
  try {
    await Tweet.create({
      _id: shortId.generate(),
      usuarioId,
      contenido,
    });
    res.status(201).json({ mensaje: "Tweet publicado con exito" });
  } catch (e) {
    res.status(400).json({ mensaje: e.errors[0].message });
  }
};

exports.getTweets = async (req, res) => {
  const tweets = await Tweet.sequelize.query(
    "SELECT t._id, t.contenido, CONCAT(u.nombre, ' ', u.apellido) as nombreCompleto, CAST(t.updatedAt AS DATE) as fecha FROM tweets AS t INNER JOIN usuarios AS u ON u._id = t.usuarioId ORDER BY t.updatedAt DESC",
    { type: QueryTypes.SELECT }
  );
  res.send(tweets);
};

exports.getTweetsParametros = async (req, res) => {
  const tweets = await Tweet.findAll({
    where: {
      usuarioId: req.params.id,
    },
  });
  res.send(tweets);
};

exports.deleteTweetParametros = async (req, res) => {
  const iCount = await Tweet.count();
  try {
    await Tweet.destroy({ where: { _id: req.params.id } });
    const uCount = await Tweet.count();
    console.log(uCount, iCount);
    if (uCount == iCount) {
      res.status(400).json({ mensaje: "No se pudo eliminar el tweet" });
    }
    res.status(200).json({ mensaje: "Tweet eliminado" });
  } catch (e) {
    res.status(500).json({ mensaje: e.errors[0].message });
  }
};
