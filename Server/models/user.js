const mongoose = require('mongoose');

const usreSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50
    },
    password: {
        type: String,
        required: true,
        min: 5,
        max: 50,
    },
    recentSearches: {
        type: Array,
        default: []
    }
},{timestamps: true})

const User = mongoose.model("user",usreSchema)
module.exports = User