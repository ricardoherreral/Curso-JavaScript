// Consumir modulos de src

const express = require("express");
const debug = require("debug")('app:Main');

const { Config } = require("./src/config/index");

const { ProductsAPI } = require('./src/products/index');

const app = express()

app.use(express.json())

// MODULOS

ProductsAPI(app)

app.listen(Config.port, () => {
    debug(`Servidor escuchando en el puerto ${Config.port}`)
})
