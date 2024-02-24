const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:gw7Mb69XTMejZghv@cluster0.qjktjnz.mongodb.net/").then(() =>{
    console.log("Connection Sucessful.");
}).catch((err)=>{
    console.log(err);
})