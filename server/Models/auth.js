const mongoose = require('mongoose')

const authSchema = new mongoose.Schema({
    mobilenumber: {
        type: Number,
        required: true
    },
    otp: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now(),
        required: true,
        get: (timestamp) => timestamp.getTime(),
        set: (timestamp) => new Date(timestamp),
    }
})

module.exports=mongoose.model('auth',authSchema)