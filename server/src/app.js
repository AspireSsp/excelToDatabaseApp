const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors());

app.use(express.json());

//    route are import here..
const product = require("./routes/excelRoute");
app.use("/", product);


module.exports = app;



/*
const express = require("express");
const multer = require('multer');
const cors = require('cors')
const path = require('path');
const Exceldata = require('./models/excelDataModel');
const excelToJson = require("convert-excel-to-json");
const app = express();
app.use(express.json());
app.use(cors());



var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./src/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

//    route are import here..
app.post('/upload',upload.single('filename') ,(req,res)=>{
    console.log("hi sanajy");
    console.log(req.file)
    console.log(path.join(__dirname, "./uploads/"));
    const result = excelToJson({
        sourceFile: path.join(__dirname, "./uploads/") + req.file.filename,
        header:{
          // Is the number of rows that will be skipped and will not be present at our result object. Counting from top to bottom
          rows: 1 // 2, 3, 4, etc.
      },
        columnToKey: {
            A: 'NameOfTheCandidate',
            B: 'Email',
            C: 'MobileNo',
            D: 'DateOfBirth',
            E: 'WorkExperience',
            F: 'ResumeTitle',
            G: 'CurrentLocation',
            H: 'PostalAddress',
            I: 'CurrentEmployer',
            G: 'CurrentDesignation',
        }
      });
      console.log(result);
      const data = Exceldata.insertMany(result.Sheet1);
      if(!data){
        console.log("error while inserting data..")
      }
      
    

    res.status(200).json({message: 'success'})
})

module.exports = app;
*/

