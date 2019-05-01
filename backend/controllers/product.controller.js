'use strict'

const Product = require('../models/product');
const productCrtl = {};

productCrtl.getProductFindById = async (req, res) => {

    const { id } = req.params;
    const product = await Product.findById(id);
    res.json(product);
};

productCrtl.getProducts = async (req, res) => {

    const products = await Product.find();
    res.json(products)
};

productCrtl.saveProduct = async (req, res) => {

    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description
    });
    await product.save();

    res.json({
        "message": "Product Saved"
    });

};

productCrtl.updateProduct = async (req, res, next) => {

    const { id } = req.params;
    const product = {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description
    }
    await Product.findOneAndUpdate({ _id: id }, { $set: product }, { new: true });
    res.json({
        "message": 'Product Updated'
    });

};

productCrtl.deleteProduct = async (req, res) => {

    const { id } = req.params;
    await Product.findOneAndRemove({ _id: id });
    res.json({
        "message": 'Product Deleted'
    });

};

module.exports = productCrtl;