const mongoose = require('mongoose')

const playlist = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'please enter the name'],
        trime: true,
    },
    lastname: {
        type: String,
        trime: true,
    },
    email: {
        type: String,
        required: [true, 'please enter the email'],
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'please enter valid email'],
        trim: true,
    },
    address: {
        type: String,
        required: [true, 'please enter the address'],
        unique: true,
    }
})

module.exports = mongoose.model('student', playlist)