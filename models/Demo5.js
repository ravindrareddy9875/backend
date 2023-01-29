const mongoose = require("mongoose");

const Demo5 = new mongoose.Schema({
    topic: {
        type: String,
    },
    MdFile:{
        type: String,
    }
   
   
});

const Demo5Model = mongoose.model("demos5", Demo5);

module.exports = Demo5Model;