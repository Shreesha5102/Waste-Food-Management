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
    Items: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }

}) 


module.exports = mongoose.model('Donor', DonorSchema);