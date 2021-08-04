//librerias
const validator = require("validator").default;

// interface
const classInterfaceDaoPersonajes = require("../infra/conectors/interfaceDAOPersonaje");

//Servicio
const postPersonajes = async(data) => {
    //validaciones de unas logica de negocios
    if (!data) {
        throw new Error("No llego data");
    }
    if (!validator.isDate(data.dtFechaCreacion)) {
        throw new Error("La fecha de creacón de nuestro personaje no es valida");
    }

    // el llamado a mi interface

    let dao = new classInterfaceDaoPersonajes();
    let result = await dao.setPersonaje(data);
    if (result.error) {
        throw new Error(result.msg);
    }

    return result;
};

module.exports = postPersonajes;