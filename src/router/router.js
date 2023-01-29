const express = require("express");
const router = express.Router()

const empController = require("../controllers/employeeController");


router.post("/create", empController.createUser)
router.post("/login", empController.login)






module.exports = router