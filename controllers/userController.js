const User = require("../models/User");


exports.getAllUsers = async(req, res) => {
   
//    console.log("Request 2");
   
    try {
        const users = await Product.find();
        // console.log("Request sent 2");
        res.send(users);
    } catch (error){
        res.send(error);
    }
};

exports.createUser = async(req, res) => {
    try{
        const {name, description, age, gender, occupation} = req.body;

        //Save into Database at last
        const user = new User({
            name,
            description,
            age,
            gender,
            occupation,
            imageUrl: req.file.path,
        });

        await user.save(); //to save in database
        res.send(user); // saved this user


        // console.log(req.file.path);
        // console.log(name);
    } catch (error) {
        res.send(error);
    }
};