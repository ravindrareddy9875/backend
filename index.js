const express = require("express");
const app = express();
const cors=require("cors")
const mongoose = require("mongoose");



app.use(cors())
app.use(express.json()) 
app.use(express.urlencoded())

const DemoModel = require("./models/Demo");
const Demo1Model = require("./models/Demo1");
const Demo2Model = require("./models/Demo2");
const Demo3Model = require("./models/Demo3");
const Demo4Model = require("./models/Demo4");
const Demo5Model = require("./models/Demo5");
const FinalDemoModel=require("./models/FinalDemo")

mongoose.connect("mongodb://127.0.0.1:27017/Myapp?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
  { useNewUrlParser: true,useUnifiedTopology:true}
);


app.post('/addsub',(req,res)=>{
    const {classname,subjects}=req.body
    const data = new DemoModel({classname,subjects});
      data.save(err =>{
        if(err){
          res.send(err) 
        }
        else{
          res.send({message:"Topics saved Successfully"})
        }
      });
  
  })
  app.post('/addtopic',(req,res)=>{
    const {classname,subject,topics}=req.body
    const data = new Demo1Model({classname,subject,topics});
      data.save(err =>{
        if(err){
          res.send(err) 
        }
        else{
          res.send({message:"Subjects saved Successfully"})
        }
      });
  
  })
  app.post('/addsubtopics',(req,res)=>{
    const {classname,subject,topic,subtopics}=req.body
    const data = new Demo2Model({classname,subject,topic,subtopics});
      data.save(err =>{
        if(err){
          res.send(err) 
        }
        else{
          res.send({message:"sub topics saved Successfully"})
        }
      });
  
  })
  app.post('/addquestion',(req,res)=>{
    const {topic,question,options,correctAnswer}=req.body
    const data = new Demo3Model({topic,question,options,correctAnswer});
      data.save(err =>{
        if(err){
          res.send(err) 
        }
        else{
          res.send({message:"Question saved Successfully"})
        }
      });
  
  })

  app.post('/addvideo',(req,res)=>{
    const {topic,videoId}=req.body
    const data = new Demo4Model({topic,videoId});
      data.save(err =>{
        if(err){
          res.send(err) 
        }
        else{
          res.send({message:"Video saved Successfully"})
        }
      });
  
  })
  app.post('/addfile',(req,res)=>{
    const {topic,MdFile}=req.body
    const data = new Demo5Model({topic,MdFile});
      data.save(err =>{
        if(err){
          res.send(err) 
        }
        else{
          res.send({message:"File saved Successfully"})
        }
      });
  
  })

  app.post('/addfinal',(req,res)=>{
    const {classname,subject,topic,videoIDs,topicContent,chapterID}=req.body
    const data = new FinalDemoModel({classname,subject,topic,videoIDs,topicContent,chapterID});
      data.save(err =>{
        if(err){
          res.send(err) 
        }
        else{
          res.send({message:"File saved Successfully"})
        }
      });
  
  })
 

  app.get('/getSub',async (req,res)=>{
    const data=await DemoModel.find()
    res.json(data)
  })

  app.get('/getChapters',async (req,res)=>{
    const data=await Demo1Model.find()
    res.json(data)
  })
  app.get('/getTopics',async (req,res)=>{
    const data=await Demo2Model.find()
    res.json(data)
  })

  app.get('/getquestions',async (req,res)=>{
    const data=await Demo3Model.find()
    res.json(data)
  })

  app.get('/getvideos',async (req,res)=>{
    const data=await Demo4Model.find()
    res.json(data)
  })

  app.get('/getfiles',async (req,res)=>{
    const data=await Demo5Model.find()
    res.json(data)
  })

  

  




  
app.listen(3003, () => {
    console.log("Server running");
  });