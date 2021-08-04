const classDAO = require("../repository/daoPersonaje");

class interfaceDAOPersona {
    async setPersonaje(data) {
        let dao = new classDAO();
        let query = await dao.setPersona(data);
        return query;
    }
}

module.exports = interfaceDAOPersona;
