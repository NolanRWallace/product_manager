const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.post("/api/products/create", ProductController.createProduct);
    app.get("/api/products", ProductController.allProducts);
    app.get("/api/products/:id", ProductController.OneProduct);
    app.post("/api/products/:id", ProductController.deleteProduct);
    app.put("/api/products/:id", ProductController.updateProduct);
}