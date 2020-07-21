const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product must have title"],
        minlength: [3, "Must be at least 3 characters in length"]
    },
    price: {
        type: Number,
        required: [true, "Product must have a price"],
        min: [.01, "Must have a positive value"]
    },
    description: {
        type: String,
        required: [true, "Product must have a description"],
        minlength: [10, "Description must be at least 10 characters in length"]
    }
}, {timestamps: true});

module.exports.Product = mongoose.model('Product', ProductSchema);