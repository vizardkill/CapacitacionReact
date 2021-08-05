require("dotenv").config();

const conexion = {
    user: process.env.DBMARVEL_USER,
    password: process.env.DBMARVEL_PWD,
    server: process.env.DBMARVEL_SERVER,
    database: process.env.DBMARVEL_SCHEMA,
    options: {
        rowCollectionOnRequestCompletion: true,
        encrypt: true,
        enableArithAbort: true,
        useUTC: false,
        trustServerCertificate: false
    },
    parseJSON: true,
};

module.exports = { conexion };