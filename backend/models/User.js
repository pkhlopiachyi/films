const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 4,
        max: 255
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min: 4,
        max: 255
    },
    gender: {
        type: String,
        required: true,
    },
    birthday: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 5,
        max: 255
    },
    favorite: {
        type: [String],
        default: []
    }
})

module.exports = mongoose.model('User', userSchema);
