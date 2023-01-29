const mongoose = require("mongoose");

const Demo3 = new mongoose.Schema({
    topic: {
        type: String,
    },
    question:{
        type:String,
    },
    options:{
        type: [String],
        
    },
    correctAnswer: {
        type: String,
    }
   
   
});

const Demo3Model = mongoose.model("demos3", Demo3);

module.exports = Demo3Model;