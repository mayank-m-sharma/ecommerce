const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        requried: false,
    },
    quantity: {
        type: Number,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Product", ProductSchema)