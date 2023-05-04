const createError = require('http-errors');

const debug = require('debug')('app:module-products-controller');

const { ProductsService } = require('./services');

const { Response } = require('../common/response');

module.exports.ProductsController = {
    getProducts: async (req, res) => {
        try {
            let products = await ProductsService.getAll()
            Response.success(res, 200, 'Lista de productos', products)
        } catch (error) {
            debug(error)
            Response.error(res)
        }
    },
    getProduct: async (req, res) => {
        try {
            const { params: { id } } = req
            let product = await ProductsService.getById(id)
            if (!product) {
                Response.error(res, new createError.NotFound())
            } else {
                Response.success(res, 200, `Producto ${id}`, product)
            }
        } catch (error) {
            debug(error)
            Response.error(res)
        }

    },
    createProduct: async (req, res) => {
        try {
            const { body } = req
            debug(body)
            if (!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest())
            } else {
                const insertedId = await ProductsService.create(body)
                Response.success(res, 201, 'Producto Agregado', insertedId)
            }
        } catch (error) {
            debug(error)
            Response.error(res)
        }
    },
    // update
    updateProduct: async (req, res) => {
        try {
            const { body } = req
            let product = body
            const id = req.params.ide

            if (!product || Object.keys(product) === 0) {
                Response.error(res, new createError.BadRequest())
            } else {
                debug(product)
                const updatedProduct = await ProductsService.update(id, product)
                Response.success(res, 200, 'Producto Actualizado', updatedProduct)
            }
        } catch (error) {
            debug(error)
            Response.error(res)
        }
    },
    // delete
    deleteProduct: async (req, res) => {
        const { params: id } = req
        try {
            const result = await ProductsService.deleteItem(id)
            if (!result) {
                Response.error(res, new createError.BadRequest())
            } else {
                Response.success(res, 301, `Producto ${id} eliminado`, result)
            }
        } catch (error) {
            debug(error)
            Response.error(res)
        }

    },
    generateReport: async (req, res) => {
        try {
            ProductsService.generateReport('inventario', res)
        } catch (error) {
            debug(error)
            Response.error(res)
        }
    }
}
