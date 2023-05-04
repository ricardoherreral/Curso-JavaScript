const { ObjectId } = require('mongodb');
const debug = require('debug')('app:services');
const { Database } = require('../database/index');
const { ProductsUtils } = require('./utils');

const COLLECTION = 'products'

// Consult all
const getAll = async () => {
    const collection = await Database(COLLECTION)
    return await collection.find({}).toArray()
}

// Consult by ID
const getById = async (id) => {
    const collection = await Database(COLLECTION)
    return await collection.findOne({ _id: new ObjectId(id) })
}

// Create
const create = async (product) => {
    const collection = await Database(COLLECTION)
    let result = await collection.insertOne(product)
    return result.insertedId
}

// update
const update = async (id, updatedProduct) => {
    const collection = await Database(COLLECTION)
    //let result = await collection.updateOne(id, { $set: { list: updatedProduct } })
    let result = await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { ...updatedProduct } },
        { upsert: true }
    );
    debug(result)
    return result
}

// delete
const deleteItem = async (id) => {
    const collection = await Database(COLLECTION)
    let result = await collection.deleteOne({ _id: new ObjectId(id) })
    return result
}

// Excel Report
const generateReport = async (name, res) => {
    let products = await getAll()
    ProductsUtils.excelGenerator(products, name, res)
}


module.exports.ProductsService = {
    getAll,
    getById,
    create,
    generateReport,
    update,
    deleteItem
}