const { MongoClient } = require('mongodb');
const debug = require('debug')('app:module-Database');
const { Config } = require('../config/index');

//Exportar una funcion que devuelva la conexion a la base de datos
var connection = null
module.exports.Database = (collection) =>
    new Promise(async (resolve, reject) => {
        try {
            if (!connection) {
                const client = new MongoClient(`${Config.mongoUri}`)
                connection = await client.connect()
                debug('Nueva conexion realizada con MongoDB Atlas')
            }
            debug('Reutilizando conexion')
            const db = connection.db(Config.mongoDbName)
            resolve(db.collection(collection))
        } catch (error) {
            reject(error);
            debug(error)
        }
    })