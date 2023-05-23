const mongoose = require("mongoose")
const SubjectSchema = mongoose.Schema({
    name:{type:String,reqiured:true},
    lectures:[{type:mongoose.Schema.Types.ObjectId,ref:"lecture"}]
})

const SubjectModel = mongoose.model("subject",SubjectSchema);
module.exports = SubjectModel