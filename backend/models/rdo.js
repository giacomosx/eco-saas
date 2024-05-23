const mongoose = require("mongoose");
const rdoSchema = mongoose.Schema({
    prospect : {
        type: String,
        required: true
    },
    state: {
        type: String,
        enum: ['pending', 'processed', 'in_progress', 'cancelled'],
        required: true
    },
    processed_date: {
        type: Date,
        required: false, 
    },
    description: {
        type: String,
        required: true,
    },
    local_unit: {
        type: String,
        required: true
    },
    activities: [{
        activity_description: {
            type: String,
            required: true,
        },
        qty: {
            type: Number,
            required: true,
        },
        m_unit: {
            type: String,
            required: true
        },
        activity_notes: {
            type: String,
            required: false
        }
    }],
    notes: [{
        date_created: {
            type: Date,
            default: Date.now
        },
        notes_description: {
            type: String,
            required: true
        }, 
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users'
        }
    }],
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tasks'
    }],
    related_quote: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quotes'
    },

}, { timestamps: true, strict: true });

module.exports = mongoose.model('Rdo', rdoSchema, 'rdo')
