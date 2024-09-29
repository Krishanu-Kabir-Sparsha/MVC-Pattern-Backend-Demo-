// Mongoose binds as a static helper functions provider for CRUD Operations*
const mongoose = require("mongoose");

//Creating Schema or data models, supports the  data structure, data types, and validation rules. 
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true,
    },
    description: {
        type: String,
        default: "No description available",
    },
    price: {
        type: Number,
        required : true,
    },
    category: {
        type: String,
        required : true,
    },
    brand: {
        type: String,
        required : true,
    },
    stock: {
        type: Number,
        required : true,
    },
    imageUrl: {
        type: String,
        required : true,
    },
}, { timestamps: true }); 

module.exports = mongoose.model("Product", productSchema); 
// Here, Product is the collection name created in DB