const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/google_translate" ,{useNewUrlParser:true, useUnifiedTopology:true}).then(() =>{
    console.log("cinnection succefully....");
}).catch((err)=>{
    console.log(err);
});