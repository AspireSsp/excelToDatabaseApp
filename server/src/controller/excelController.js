const Exceldata = require("../models/excelDataModel");
const excelToJson = require("convert-excel-to-json");
const async = require('async');
const path = require("path");

//  create Entry in database
exports.excelEntry = async (req, res, next) => {
  try {
    // console.log("hi sanajy");
    // console.log(req.file);
    if (req.file === undefined) {
      return res.status(400).json({ message: "no file" });
    }

    const result = excelToJson({
      sourceFile: path.join(__dirname, "../uploads/") + req.file.filename,
      header: {
        // Is the number of rows that will be skipped and will not be present at our result object. Counting from top to bottom
        rows: 1, // 2, 3, 4, etc.
      },
      columnToKey: {
        A: "NameOfTheCandidate",
        B: "Email",
        C: "MobileNo",
        D: "DateOfBirth",
        E: "WorkExperience",
        F: "ResumeTitle",
        G: "CurrentLocation",
        H: "PostalAddress",
        I: "CurrentEmployer",
        G: "CurrentDesignation",
      },
    });

    // console.log(result.Sheet1);
    async.eachSeries(result.Sheet1, async(item) => {
     
      const user = await Exceldata.findOne({Email: item.Email});
  
      if(!user){
        var data = await Exceldata.create( item );
        // console.log(data);
      }
      // console.log(user);
  
    });

    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};
