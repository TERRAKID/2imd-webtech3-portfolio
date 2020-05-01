const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const statSchema = new Schema({
    country: {
        type: String,
        required: true
    },
    cases: {
        type: Number,
        required: true
    }
});

const Stat = mongoose.model('Stat', statSchema);

module.exports = Stat;