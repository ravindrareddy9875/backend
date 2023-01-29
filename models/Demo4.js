const mongoose = require("mongoose");

const Demo4 = new mongoose.Schema({
    topic: {
        type: String,
    },
    videoId:{
        type: String,
    }
   
   
});

const Demo4Model = mongoose.model("demos4", Demo4);

module.exports = Demo4Model;