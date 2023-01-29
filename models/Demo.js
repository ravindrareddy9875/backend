const mongoose = require("mongoose");

const Demo = new mongoose.Schema({
    classname: {
        type: String,
    },
    subjects:{
        type: [String],
        
    }
   
   
});

const DemoModel = mongoose.model("demos", Demo);

module.exports = DemoModel;