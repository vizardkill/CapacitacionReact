//Librerias
const sql = require("mssql");

//Configuracion
const { conexion } = require("../../../../common/config/confSQL_connectionDBMarvel");

class daoPersonaje {
    async setPersona(data) {
        try {
            let conn = await new sql.ConnectionPool(conexion).connect();

            let response = await conn.query`

            DECLARE @intId INTEGER;

            INSERT INTO tbl_Personajes VALUES
            (
               ${data.strNombre},
               ${data.strApellidos},
               ${data.strApodo},
               ${data.dtFechaCreacion}
            );

            SET @intId = SCOPE_IDENTITY();
            SELECT * FROM tbl_Personajes WHERE intId = @intId;`;

            let result = {
                error: false,
                data: response.recordset[0],
                msg: `Se creo exitosamente el Persona ${strApodo} con número de registro #${response.recordset[0].intId}.`,
            };

            return result;
        } catch (error) {
            let result = {
                error: true,
                msg:
                    error.message ||
                    "Error en el servicio setPersona de la clase daoPersonaje.",
            };

            return result;
        }
    }

    async deletePersona() {}

    async getPersonajes() {}

    async updatePersonaje() {}
}

module.exports = daoPersonaje;
