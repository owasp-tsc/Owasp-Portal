const express = require("express");
const app = express();
const mongoose = require("mongoose");
const body = require("body-parser");
const {model , answers} = require("./database");
const _ = require("lodash");

mongoose.connect("mongodb://localhost/CodingMarathonPortal" ,{useNewUrlParser:true})
    .then(()=>console.log("Connected to mongodb"))
    .catch(()=>console.log("Failed to connect to mongodb"));

app.use(body.json());
app.use(body.urlencoded());

app.post('/answer' ,(req , res)=>{
    const user = model.findOne({"username" : req.body.username});
    user.Answers = [...user.Answers , {"Question": req.body.question , "Answer":req.body.answer}];
    user.save(); 
});

app.get('/leaderboard' , async (req , res)=>{
    const list = await model.find();
    const sorted = _.orderBy(list , ["Answer"] ,["desc"]);
    res.json(sorted);
    
});



const port = process.env.PORT || 8000;
app.listen(port , ()=>console.log("Server up"));