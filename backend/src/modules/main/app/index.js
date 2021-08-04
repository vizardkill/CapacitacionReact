// paquestes
require("dotenv-flow").config();

//librerias
const express = require("express");
const cors = require("cors");
const app = express();

// config
app.set("port", process.env.PORT);

//middleware
app.use(cors())
app.use(express.json())

//router

app.use(require("../../Personajes/infra/http/apiPersona.routes"))

module.exports = app;