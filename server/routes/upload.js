const controller = require("../controllers/upload");
const express = require("express");
const multer = require("multer");
const path = require("path")

const router_upload = express.Router();

let storage  = multer.diskStorage({

    destination:(req, file, cb) =>{
     cb(null, "./uploads")
    },
    filename:(req, file, cb) =>{
        console.log("hola bebe")
     cb(null, file.fieldname + path.extname(file.originalname))
    }
 })

const upload = multer({storage})

router_upload.post("/upload", upload.single('myFile'), controller.uploadFile);

module.exports = router_upload;
