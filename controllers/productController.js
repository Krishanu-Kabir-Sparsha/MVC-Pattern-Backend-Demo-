const Product = require("../models/Product");


exports.getAllProducts = async(req, res) => {
    // console.log("request 1");
    
    try {
        const products = await Product.find();
        res.send(products);
    } catch (error){
        res.send(error);
    }
};

exports.getProductById = async (req, res) => {
    try {
        const productId = req.params.id; // Get the product ID from the URL
        const product = await Product.findById(productId); // Fetch product details using the ID
        
        if (!product) {
            return res.status(404).send({ message: "Product not found" });
        }
        
        res.send(product);
    } catch (error) {
        res.status(500).send({ message: "Error retrieving product", error });
    }
};

// PUT /products/:id - Update a specific product (Admin)
exports.updateProductById = async (req, res) => {
    try {
        const productId = req.params.id; // Get the product ID from the URL
        const updatedProductData = req.body; // Get the updated product data from the request body

        // Find the product by ID and update it with the new data
        const updatedProduct = await Product.findByIdAndUpdate(
            productId, 
            updatedProductData, 
            { new: true, runValidators: true } // Return the updated product and validate new data
        );

        if (!updatedProduct) {
            return res.status(404).send({ message: "Product not found" });
        }

        res.send(updatedProduct);
    } catch (error) {
        res.status(500).send({ message: "Error updating product", error });
    }
};


// DELETE /products/:id - Delete a specific product (Admin)
exports.deleteProductById = async (req, res) => {
    try {
        const productId = req.params.id; // Get the product ID from the URL

        // Find the product by ID and delete it
        const deletedProduct = await Product.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).send({ message: "Product not found" });
        }

        res.send({ message: "Product deleted successfully", deletedProduct });
    } catch (error) {
        res.status(500).send({ message: "Error deleting product", error });
    }
};


exports.createProduct = async(req, res) => {
    try{
        const {name, description, price, category, brand, stock} = req.body;
        
        //Save into Database, at last
        const product = new Product({
            name,
            description,
            price,
            category,
            brand,
            stock,
            imageUrl: req.file.path,
        });

        await product.save(); //to save in database
        res.send(product); // saved this product
        
        
        // console.log(req.file);
        // console.log(req.file.path);
        // console.log(name);
    } catch (error) {
        res.send(error);
    }
};