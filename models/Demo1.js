const mongoose = require("mongoose");

const Demo1 = new mongoose.Schema({
    classname: {
        type: String,
    },
    subject: {
        type: String,
    },
    topics:{
        type: [String],    
    }
   
   
});

const Demo1Model = mongoose.model("demos1", Demo1);

module.exports = Demo1Model;