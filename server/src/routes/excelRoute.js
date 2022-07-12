const express = require('express');
const { excelEntry } = require('../controller/excelController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
      
      cb(null, path.join(__dirname, "../uploads/"))
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname) 
    }
  })
  
  const upload = multer({ storage: storage })


const router = express.Router();

router.route("/upload").post(upload.single('filename') , excelEntry );

module.exports = router;
