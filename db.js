const mongoose = require('mongoose');

//Creating a database by the name of PRODUCTS.

mongoose.connect("mongodb+srv://shuv009:GKw2I3b8xDelXQBO@cluster0.qjktjnz.mongodb.net/PRODUCTS?retryWrites=true&w=majority&appName=Cluster0").then(() =>{
    console.log("Connection Sucessful.");
}).catch((err)=>{
    console.log(err);
})