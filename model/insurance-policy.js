const mongoose = require('mongoose');
const Schema = mongoose.Schemma;
const policySchema = new Schema({
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        email: { type: String, required: true },
        brand: { type: String, required: true },
        phone_type: { type: String, required: true },
        model: { type: String, required: true },
        manufactured_year: { type: String, required: true },
        aesthetics_insurance: { type: String, required: true },
        picture: { type: String, required: true }
})
module.exports = mongoose.model('Policy', policySchema);