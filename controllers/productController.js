const productModel = require('../models/product');

const getAllProducts = async() => {
    return await productModel.find({});
};

const addProduct = async(data) => {
    await productModel.create(data);
};

module.exports.getAllProducts = getAllProducts;
module.exports.addProduct = addProduct;