const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 2,
        max: 255
    },
    release_year: {
        type: Number,
        required: true,
        min: 1895
    },
    format: {
        type: String,
        required: true
    },
    stars: {
        type: String,
        required: true
    },
    image_link: {
        type: String
    }
});

module.exports = mongoose.model('Film', filmSchema);
