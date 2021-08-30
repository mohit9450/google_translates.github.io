const express = require('express');

// brinrg in body parser
const bodyParser = require('body-parser');

// ejs template engine
const ejs = require('ejs');

// translate api
const translate = require('@vitalets/google-translate-api');

//init our application 
const app = express()


require('./db/connection');


const validator = require('validator');
const mongoose = require('mongoose');
const PlayList = require('./models/collection');
const { response } = require('express');

const documentsw =async (texts)=>{
    try{
        const result = await PlayList.find({text:texts});
        console.log(result.length);
        if(result.length==0){
        console.log(texts);
        const reactPlayList = PlayList({
            text:texts
        })
        console.log("complete");
        const rr = await reactPlayList.save();
    }
        // console.log(rr);
    }
    catch(err){
        console.log(err);
    }
}
//setup template engine
app.set('view-engine', 'html');
app.engine('html', ejs.renderFile);

//public folder setup
app.use(express.static(__dirname + '/public'));

//body parser middleware
app.use(express.urlencoded({extended:true}));

//index route
app.get('/', (req, res) =>{
    res.render('index.ejs');
});

// post the form data to post routw
app.post('/translate', (req, res) => {  
    // get form data from the request body 
    const text = req.body.text
    const language = req.body.language
    documentsw(text);
    translate(text, {to: language}).then(response => {
        console.log(response.text)
       res.render('index.ejs', {translatedText:response.text})
    }).catch(err => {
        console.error(err);
    });
})

// Port varibale
const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`App runnning on port ${PORT}`)
})