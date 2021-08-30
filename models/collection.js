
const validator = require('validator');
const mongoose = require('mongoose');


const playListSchema = new mongoose.Schema({
    text:{
        type:String,
        // required:true,
        // lowercase:true,
        // trim : true,
        // minlength : 2,
        // maxlength: 30
    }
    
})

const PlayList = new mongoose.model("PlayList",playListSchema);
module.exports = PlayList;