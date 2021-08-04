const servicePostPersonaje = require("../../domain/setPersonaje.service")

class ctrlPersonaje {
    async postPersonajes(req, res) {
        try {
            let data = req.body
            let queryPostPersonaje = await servicePostPersonaje(data);

            res.status(200).json(queryPostPersonaje)
        } catch (error) {
            let result = {
                error: true,
                msg: error.message,
            };

            res.status(400).json(result);
        }
    }
}

module.exports = ctrlPersonaje