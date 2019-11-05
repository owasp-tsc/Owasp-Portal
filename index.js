const express = require("express");
const app = express();
const mongoose = require("mongoose");
const body = require("body-parser");
const {model , answers} = require("./database");
const _ = require("lodash");

mongoose.connect("mongodb://localhost/CodingMarathonPortal" ,{useNewUrlParser:true})
    .then(()=>console.log("Connected to mongodb"))
    .catch(()=>console.log("Failed to connect to mongodb"));

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });
app.use(body.json());
app.use(body.urlencoded());


app.post('/answer' ,async (req , res)=>{
    const user = await model.findOne({"Username" : req.body.Username});
   user.Answers = [...user.Answers , {"Question": req.body.Question , "Answer":req.body.Answer}];
   console.log(user.Answers);
    user.save();
    res.send("success");
});

app.post('/loginData' , (req , res)=>{
    console.log(req.body.password);
    if(req.body.password == 12345){
    const user = model.findOne({Username : req.body.Username});
    if(user) res.send("success");
    else res.send("failed");
    }
})
    
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