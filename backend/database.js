const mongoose = require("mongoose");

const schema = mongoose.Schema({
    "Username" : String ,
    "Answers" : [{"Question" : String , "Answer" : Number}]
});
const schema2 = mongoose.Schema({
    "Question" : String ,
     "Answer" : Number
});

const model = mongoose.model(`codingMarathon` , schema);
const answers = mongoose.model('codingMarathon/Answers' , schema2);
module.exports = {model ,answers};