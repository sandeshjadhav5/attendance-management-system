const express = require("express");

const { AttendanceModel } = require("../models/Attendance.model");
const { StudentModel } = require("../models/Students.model");
const { Router } = require("express");

const attendanceRouter = express.Router();

//POST REQUEST - MARK ATTENDANCE

attendanceRouter.post("/:studentId", async (req, res) => {
  const { studentId } = req.params;
  const { isPresent } = req.body;

  try {
    const student = await StudentModel.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student Not Found" });
    }
    const attendance = new AttendanceModel({
      student: studentId,
      date: new Date(),
      isPresent,
    });

    const newAttendance = await attendance.save();
    res.status(201).json(newAttendance);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//GET REQUEST - GET ATTENDANCE RECORDS
attendanceRouter.get("/records", async (req, res) => {
  try {
    const attendanceRecords = await AttendanceModel.find().populate("student");
    res.json(attendanceRecords);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = {
  attendanceRouter,
};
