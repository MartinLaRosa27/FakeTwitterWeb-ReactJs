const express = require("express");
const cors = require("cors");
const router = require("./router.js");
require("dotenv").config({ path: "variables.env" });

const dataBase = require("./config/database.js");
require("./models/Usuario.js");
require("./models/Tweet.js");
require("./models/RelacionUsuario.js");
dataBase
  .sync()
  .then(() => {
    console.log("Se conecto correctamente a la base de datos");
  })
  .catch((e) => console.log(e));

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router());

const server_port = process.env.YOUR_PORT || process.env.PORT || 80;
const server_host = process.env.YOUR_HOST || "0.0.0.0";
app.listen(server_port, server_host, function () {
  console.log("La aplicación esta corriendo en el puerto %d", server_port);
});
