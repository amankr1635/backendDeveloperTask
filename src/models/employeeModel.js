const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
name:{
    type :String,
    required: true,
    trim: true
},
email : {
    type : String,
    required: true,
    trim : true
},
password :{
    type : String,
    required: true,
    trim : true
},
role : {
    type  :String,
    required: true,
    enum: ["Super Admin", "Admin", "Employee"],
    default : "Employee"
}
},{timestamps: true})

module.exports = mongoose.model("employee",employeeSchema)