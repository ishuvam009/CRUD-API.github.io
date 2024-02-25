const express = require('express');
const app = express();
const Product = require('./models/models');
app.use(express.json())
require("./db")  //Connecting to the database.
PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hello from server.");
});

//Post a product api.
app.post('/api/products', async (req,res) => {
    try {
        const product =  await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Get all products api
app.get('/api/products',async (req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(await Product.find({}))
    } catch (error) {
        res.status(500).json({messafe: error.message})
    }
})

app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}.`);
})