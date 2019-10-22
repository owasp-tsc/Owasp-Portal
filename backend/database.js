const mongoose = require("mongoose");

const schema = mongoose.Schema({
    "Username" : String ,
    "Answers" : [{"Question" : String , "Answer" : String}]
});

const model = mongoose.model(`codingMarathon` , schema);
const answers = mongoose.model('codingMarathon/Answers' , schema);
module.exports = {model ,answers};