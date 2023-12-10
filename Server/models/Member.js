const mongoose = require('mongoose')


const Member = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    seniority: {
        type: String,
        required: true,
        enum: {
            values: ["New Member", "Old Member"]
        }
    },
    contribution: {
        type: Boolean,
        required: true
    },
    reglement: {
        type: Boolean,
        required: true
    },
})

module.exports = mongoose.model('Member', Member)