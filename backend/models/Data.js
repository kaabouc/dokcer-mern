// models/Data.js
const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    value: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Data', DataSchema);
