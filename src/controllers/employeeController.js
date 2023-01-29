const employeeModel = require("../models/employeeModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {isValidEmail, passwordVal} = require("../validations/validation");


const createUser = async function(req,res){
    let body = req.body
    const {name, email, password, role}= body
    if(Object.keys(body).length == 0 ) return res.status(400).send({status: false, message : "enter data in body"})
    if(!name)return res.status(400).send({status: false, message: "enter name "})
    if(!email) return res.status(400).send({status: false, message: "enter email"})
    if(!isValidEmail(email))return res.status(400).send({status: false, message: "enter a valid email id"})

    if(!password) return res.status(400).send({status: false, message: "enter password"})
    if(!passwordVal(password))return res.status(400).send({satatus: false, message: "at least 1 lowercase, at least 1 uppercase,contain at least 1 numeric character at least one special character, range between 8-12"})
   var salt  = await bcrypt.genSalt(10)
   var hash = await bcrypt.hash(password, salt)
   body.password = hash
    req.hash =hash
    console.log(typeof hash)
    if(!role) return res.status(400).send({status: false, message: "enter role"})


    let create = await employeeModel.create(body)
    res.status(201).send({status: true, data : create})

}

const login  = async function(req,res){
    let body = req.body

    let user = await employeeModel.findOne({email: body.email})
    let token = jwt.sign({userId :user._id.toString() }, "thisisfalanakey")
    const a = await bcrypt.compare(body.password, req.hash)

    return res.status(201).send({status:true, data: token})
}


module.exports = {createUser, login}