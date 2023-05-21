const mongoose = require("mongoose");

const attendanceSchema = mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student",
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  isPresent: {
    type: Boolean,
    required: true,
  },
});

const AttendanceModel = mongoose.model("attendance", attendanceSchema);

module.exports = {
  AttendanceModel,
};
