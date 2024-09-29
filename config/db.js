const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");

dotenv.config(); //initializing

//normal func
// async function connectDB(params) {   
// }is same as

//arrow func =>
const connectDB = async () => {
    // to test successful or not
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connected".bgGreen)
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;