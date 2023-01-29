const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
title : {
    type: String,
    required : true,
    trim : true
},
description:{
    type: String,
    required: true,
    trim : true
},
videoUrl: {
    type: String,
    required: true,
    trim : true
},
topics : {
    type : [String],
    required: true,
    trim : true
},
duration : {
    type: String,
    required: true,
    trim: true
},
category: {
    type: String,
    required: true,
    trim: true
}
},{timestamps: true})

module.exports = mongoose.model("course",courseSchema)
