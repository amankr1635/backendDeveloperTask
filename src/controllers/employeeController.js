const employeeModel = require("../models/employeeModel");
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
    if(!role) return res.status(400).send({status: false, message: "enter role"})


    let create = await employeeModel.create(body)
    res.status(201).send({status: true, data : create})

}


module.exports = {createUser}