const mysql = require('mysql');
const {database} = require('./config');
const {promisify} = require('util');

const conexion = mysql.createConnection(database);

conexion.connect((error) => {

    if(error){
        console.log('Error de conexion');
    } else {
        console.log("Se ha realizado la conexion");        
    }

})

conexion.query = promisify(conexion.query);

module.exports = {
    conexion
}