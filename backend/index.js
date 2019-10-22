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
    const user = model.findOne({"Username" : req.body.Username});
  //  user.Answers = [...user.Answers , {"Question": req.body.question , "Answer":req.body.answer}];
    //user.save();
    console.log(user.Username); 
    res.json(user);
});

app.post('/user', (req, res)=>{
    const data = new model({
        "Username" : req.body.Username ,
    });
    data.save();
    res.send("succesfully regustered");
})

app.get('/leaderboard' , async (req , res)=>{
    const list = await model.find();
    const sorted = _.orderBy(list , ["Answer"] ,["desc"]);
    res.json(sorted);
    
});
app.post('/database' , (req , res)=>{
    const  list = new answers({
        "Question" : req.body.Question ,
        "Answer" : req.body.Answer,
    });
    list.save();
    res.send("success");
});

app.get('/questions' , async (req , res)=>{
    const list = await answers.find();
    res.json(list); 
})


const port = process.env.PORT || 8000;
app.listen(port , ()=>console.log("Server up"));