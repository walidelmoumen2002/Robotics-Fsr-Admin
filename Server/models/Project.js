const mongoose = require('mongoose')
const member = require('./Member.js')
const component = require('./Component.js')



const Projet = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    members: [{
        members: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'member'
        }
    }],
    components: [{
        component: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Component'
        },
        quantity: {
            type: Number,
            required: true,
            default: 1
        }
    }]
})


module.exports = mongoose.model('projet', Projet)