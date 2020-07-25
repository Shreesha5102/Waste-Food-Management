const mongoose = require('mongoose');

var DonorSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Phone_no: {
        type: String,
        required: true
    },
    Street: {
        type: String,
        required: true
    },
    Town: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    }
}) 


module.exports = mongoose.model('Donor', DonorSchema);