const mongoose = require("mongoose");

const FinalDemo = new mongoose.Schema({
    classname: {
        type: String,
    },
    subject: {
        type: String,
    },
    topic:{
        type: String,    
    },
    videoIDs:{
        type:[String],
    },
    topicContent:{
        type:String,
    },
    chapterID:{
        type:String,
    }

   
   
});

const FinalDemoModel = mongoose.model("finaldemos", FinalDemo);

module.exports = FinalDemoModel;