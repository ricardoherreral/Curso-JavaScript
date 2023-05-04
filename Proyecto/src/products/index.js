const express = require('express');


const { ProductsController } = require('./controller');

const router = express.Router()

module.exports.ProductsAPI = (app) => {
    router
        .get('/', ProductsController.getProducts) // http://localhost:port/api/products/
        .get("/report", ProductsController.generateReport)  // http://localhost:port/api/products/report
        .get('/:id', ProductsController.getProduct) // http://localhost:port/api/products/23
        .post('/', ProductsController.createProduct) // http://localhost:port/api/products/
        .put('/update/:ide', ProductsController.updateProduct)
        .delete('/:id', ProductsController.deleteProduct)
    app.use('/api/products', router)
}