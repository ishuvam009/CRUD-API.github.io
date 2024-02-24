const express = require('express');
//const mongoose = require('mongoose');
const app = express();

app.use(express.json())

require("./db")

app.get('/', (req, res) => {
    res.send("Hello from server.");
});



app.post('/products',(req,res) => {
    console.log(req.body);
    res.send(req.body)
})



app.listen(8000,() =>{
    console.log("Server is running on port 8000.");
})