// Multer is a file upload middleware. An API, manages multipart/form-data,  handling file uploads in Node. js.
// multer-storage-cloudinary, used for upload files directly to Cloudinary from your Express. js application using multer.

const multer = require ("multer");

const {CloudinaryStorage} = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinaryConfig");

const storage = new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:"my-e-commerce",
        allowedFormats: ["jpeg", "png", "jpg"]
    },
});

const upload = multer({ storage: storage });

module.exports = upload;