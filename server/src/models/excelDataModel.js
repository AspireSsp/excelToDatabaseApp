const mongoose = require("mongoose");
const validator = require("validator");

const excelDataSchema = new mongoose.Schema({

    NameOfTheCandidate:{
        type:String,
        required:[true,"Please Enter Your Name"], 
    },
    Email:{
        type:String,
        required:[true,"Please Enter Your Email"],
        unique:true,
        validate:[validator.isEmail, "Please Enter a valid Email"]
    },
    MobileNo:{
        type: Number
    },
    DateOfBirth:{
        type: String
    },
    WorkExperience:{
        type: String
    },
    ResumeTitle :{
        type: String
    },
    CurrentLocation:{
        type: String
    },
    PostalAddress:{
        type: String
    },
    CurrentEmployer:{
        type: String
    },
    CurrentDesignation:{
        type: String
    }
    
    
})

module.exports = mongoose.model("tryData", excelDataSchema);