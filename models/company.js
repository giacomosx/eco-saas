const mongoose = require("mongoose");
const companySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        vatNumber: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: String,
            required: true,
        },
        mail: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        confirmed: {
            type: Boolean,
            default: false,
        },
        users: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Users",
            },
        ],
        customers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Customers",
            },
        ],
        rfq: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "RFQ",
            },
        ],
        suppliers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Suppliers",
            },
        ],
        services: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Services",
            },
        ],
    },
    {timestamps: true, strict: true}
);

module.exports = mongoose.model("Company", companySchema, "company");
