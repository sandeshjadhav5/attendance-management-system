const express = require("express");

const { AttendanceModel } = require("../models/Attendance.model");
const { StudentModel } = require("../models/Students.model");
const { Router } = require("express");
const LectureModel = require("../models/Lecture.model");
const SubjectModel = require("../models/Subject.models");
const attendanceRouter = express.Router();

attendanceRouter.get("/records",async(req,res)=>{
  try{
    

  }catch(err){
    console.log(err)
    res.status(400).send({message:"something went wrong",err})
  }
})



// New Lecture and attendence of present student
attendanceRouter.post("/",async(req,res)=>{
  try{
    let newLecture = new LectureModel(req.body);
    let lecture = await newLecture.save()
    // storing the lecture id in subject model
    await SubjectModel.findByIdAndUpdate(lecture.subject_id,{$push:{lectures:lecture._id}})
    res.status(200).send({message:"Attendence Recorded Successfully"})
  }catch(err){
    res.status(400).send({message:"sometihng went wrong"})
  }
})

module.exports = {
  attendanceRouter,
};
