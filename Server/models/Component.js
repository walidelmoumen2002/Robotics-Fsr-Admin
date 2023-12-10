const mongoose = require('mongoose')

const Component = new mongoose.Schema({
    image: {
        type: String
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true,
        enum: {
            values: ["Board", "Sensor", "Motor", "Module", "Electronics", "Energie", "Shield"]
        }
    },
    quantity: {
        type: Number,
        required: true
    },
    instock: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Component', Component)