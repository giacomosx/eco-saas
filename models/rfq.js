const mongoose = require('mongoose');

const RFQSchema = mongoose.Schema({
    prospect: {
        type: String,
        required: true,
    },
    localUnit: {
        type: String,
        required: true,
    },
    referentName: {
        type: String,
        required: true,
    },
    referentMail: {
        type: String,
        required: true,
    },
    referentPhone: {
        type: String,
        required: true,
    },
    items: [{
        cod: String,
        description: String,
        qty: Number,
        packing: String,
        number: Number
    }],
    status: {
        type: String,
        required: true,
        enum: ['Pending', 'In progress', 'Resolved', 'Rejected'],
        default: 'Pending',
    },
    note: {
        type: String,
    }
},{
    timestamps: true,
})

RFQSchema.index({ prospect: 1, localUnit: 1 })

module.exports = mongoose.model("RFQ", RFQSchema, 'requests-for-quote');