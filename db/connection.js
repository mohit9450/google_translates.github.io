const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://<username>:<password>@cluster0.lt0pn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" ,{useNewUrlParser:true, useUnifiedTopology:true}).then(() =>{
    console.log("cinnection succefully....");
}).catch((err)=>{
    console.log(err);
});