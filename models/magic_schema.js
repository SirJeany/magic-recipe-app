const mongoose = require('mongoose');

runeSchema = new mongoose.Schema({
    rune_number: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    combines_with: {
        type: Array,
        required: true
    },
    combines_from: {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model('Runes', runeSchema);