const mongoose = require('mongoose');

const NameSchema = mongoose.Schema(
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
            required: true;
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

const Name = mongoose.model('Name', NameSchema);
module.exports = Name;