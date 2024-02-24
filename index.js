const express = require('express');
//const mongoose = require('mongoose');
const app = express();

require("./db")

app.get('/', (req, res) => {
    res.send("Hello from server.");
});

app.post('./products',(req,res) => {
    app.send("Data Received.");
})

app.listen(8000,() =>{
    console.log("Server is running on port 8000.");
})