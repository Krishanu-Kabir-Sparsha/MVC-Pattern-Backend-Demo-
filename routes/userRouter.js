const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const upload = require("../config/multerConfig");


router.get("/users", userController.getAllUsers);

router.post("/createUser", upload.single('image'), userController.createUser); // image is the field name here. // upload will be worked as a middleware here.

module.exports = router;