//libreiras
const routes = require("express").Router();

const classController = require("../../app/controllers/ctrl_Personajes");

routes.post("/marvel/api/setPersonaje", async(req, res) => {
    let controllerPersonaje = new classController();
    controllerPersonaje.postPersonajes(req, res);
});

module.exports = routes;