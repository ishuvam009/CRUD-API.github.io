const express = require('express');
//const mongoose = require('mongoose');
const app = express();
const Product = require('./models/models');

app.use(express.json())

require("./db")

app.get('/', (req, res) => {
    res.send("Hello from server.");
});



app.post('/api/products', async (req,res) => {
    try {
        const product =  await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})



app.listen(8000,() =>{
    console.log("Server is running on port 8000.");
})