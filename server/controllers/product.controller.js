const { Product } = require('../models/product.model');


module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
    .then(data => res.json({message: "success", results: data}))
    .catch(err => res.json({message:"error", results: err}))
}

module.exports.allProducts = (req, res) => {
    Product.find({})
        .then(data => res.json({message: "success", results: data}))
        .catch(err => res.json({message:"error", results:err}))
}

module.exports.OneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id})
    .then(data => res.json({message:"success", results:data}))
    .catch(err => res.json({message: "error", results: err}))
}

module.exports.deleteProduct= (req, res) => {
    Product.findOneAndDelete( {_id: req.params.id})
    .then(data => res.json({message: "success", results:data}))
    .catch(err => res.json({message:"error", results: err}))
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id})
    .then(data => res.json({message:"success", results: data}))
    .catch(err => ({message:"error", results: err}))
}