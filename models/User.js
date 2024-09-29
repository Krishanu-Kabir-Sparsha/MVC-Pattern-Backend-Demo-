const mongoose = require("mongoose");
//creating schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true,
    },
    description: {
        type: String,
        default: "No description available",
    },
    age: {
        type: Number,
        required : true,
    },
    gender: {
        type: String,
        required : true,
    },
    occupation: {
        type: String,
        required : true,
    },
    imageUrl: {
        type: String,
        required : true,
    },
}, { timestamps: true }); // the time will be uploaded when it is updated to database

module.exports = mongoose.model("User", userSchema);