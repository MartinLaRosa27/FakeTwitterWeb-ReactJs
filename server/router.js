const express = require("express");
const router = express.Router();
const UsuarioController = require("./controllers/UsuarioController.js");
const TweetController = require("./controllers/TweetController.js");
const RelacionUsuario = require("./controllers/RelacionUsuario.js");

module.exports = () => {
  router.post("/post-usuario", UsuarioController.postUsuario);
  router.post("/verificar-usuario", UsuarioController.verificarUsuario);

  router.post("/post-tweet", TweetController.postTweet);
  router.get("/get-tweets", TweetController.getTweets);
  router.get("/get-tweets/:id", TweetController.getTweetsParametros);
  router.delete("/delete-tweet/:id", TweetController.deleteTweetParametros);

  router.get("/get-usuario/:nombre", RelacionUsuario.getUsuario);
  router.post("/post-relacion-usuario", RelacionUsuario.postRelacionUsuario);
  return router;
};
