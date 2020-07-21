const { Product } = require('../models/product.model');


module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
    .then(data => res.json({message: "success", results: data}))
    .catch(err => res.json(err))
}

module.exports.allProducts = (req, res) => {
    Product.find({})
        .then(data => res.json({message: "success", results: data}))
        .catch(err => res.json({message:"error", result:err}))
}