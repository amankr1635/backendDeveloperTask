const mongoose = require("mongoose");

// Create new Employee (name, email, password (encrypted), role )
// By default, Employee


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
    emun: ["Super Admin", "Admin", "Employee"],
    default : "Employee"
}
},{timestamps: true})

module.exports = mongoose.model("employee",employeeSchema)