const express = require('express');
const app = express();
const Product = require('./models/models');
app.use(express.json())
require("./db")
PORT = 3000;



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



app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}.`);
})