const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRouter");

dotenv.config(); // the env file will initialize here.

//Middleware FOR Post //else undefined will be showing
app.use(express.json());

//Connect to DB from db.js
connectDB();


app.use("/api", productRoutes);

app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000; // to run the server

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`.bgWhite);
});

