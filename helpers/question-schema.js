const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true,
}

const userSchema = mongoose.Schema(
    {
        level: reqString,
        body: reqString,
        actions: reqString,
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('question', userSchema)