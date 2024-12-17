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
        cer: String,
        description: String,
        qty: Number,
        packing: String,
    }],
    status: {
        type: String,
        required: true,
        enum: ['pending', 'in progress', 'resolved', 'rejected'],
        default: 'pending',
    },
    note: {
        type: String,
    }
},{
    timestamps: true,
})

RFQSchema.index({ prospect: 1, localUnit: 1 })

module.exports = mongoose.model("RFQ", RFQSchema, 'requests-for-quote');