const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    cod: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    storage: {
        type: Number,
    },
    label: {
        type: String,
    },
    note: {
        type: String,
    }
}, {
    timestamps: true,
})

ProductSchema.index({description: 1 })

module.exports = mongoose.model("Product", ProductSchema, 'products');