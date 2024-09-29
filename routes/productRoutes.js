const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const upload = require("../config/multerConfig");


router.get("/products", productController.getAllProducts);

// GET a specific product by ID
router.get('/products/:id', productController.getProductById);

router.post("/createProduct", upload.single('image'), productController.createProduct); // image is the field name here. upload will be worked as a middleware here.

// PUT /products/:id - Update a specific product
router.put('/products/:id', productController.updateProductById);

// DELETE /products/:id - Delete a specific product
router.delete('/products/:id', productController.deleteProductById);


module.exports = router;