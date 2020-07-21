const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.post("/api/products/create", ProductController.createProduct);
    app.get("/api/products", ProductController.allProducts);
    app.get("/api/product/:id", ProductController.OneProduct);
}