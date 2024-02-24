const mongoose = require('mongoose');

const ProductsSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        quantity: {
            type: Number,
            required: true,
            default: 0
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model("Product", ProductsSchema);
module.exports = Product;