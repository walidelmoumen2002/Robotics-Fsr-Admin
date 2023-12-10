const mongoose = require('mongoose')
const Member = require('../models/Member')
const Pack = require('./Pack.js')

const Team = mongoose.Schema({
    competition: {
        type: String,
        required: true
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member'
    }],
    robotType: {
        type: String,
        required: true
    },
    pack: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pack'
    }
})

module.exports = mongoose.model('Team', Team)