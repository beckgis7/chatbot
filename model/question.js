const mongoose = require('mongoose');
const Schema = mongoose.Schemma;
const questionSchema = new Schema({
    level: { type: String, required: true },
    body: { type: String, required: true },
    action: { type: Array, required: false }
});

module.exports = mongoose.model('Question', questionSchema);