const mongoose = require('mongoose')
const Component = require('./Component')

const Pack = mongoose.Schema({
    manager: {
        type: String,
        required: true
    },
    competition: {
        type: String,
        required: true
    },
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

module.exports = mongoose.model('Pack', Pack)