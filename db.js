const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:gw7Mb69XTMejZghv@cluster0.qjktjnz.mongodb.net/?retryWrites=true&w=majority").then(() =>{
    console.log("Connection Sucessful.");
}).catch((err)=>{
    console.log(err);
})