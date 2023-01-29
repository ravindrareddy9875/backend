const mongoose = require("mongoose");

const Demo2 = new mongoose.Schema({
    classname: {
        type: String,
    },
    subject: {
        type: String,
    },
    topic: {
        type: String,
    },
    subtopics:{
        type: [String],
        
    }
   
   
});

const Demo2Model = mongoose.model("demos2", Demo2);

module.exports = Demo2Model;