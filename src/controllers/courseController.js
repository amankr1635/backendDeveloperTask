const courseModel = require("../models/courseModel");



const createCourse=async function(req,res){
    let data=req.body;
    let {title,description,videoUrl, topics, duration, category}=data

    const createData=await courseModel.create(data)

}

