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
    State: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    No_of_pep: {
        type: String,
        required: true
    },
    No_of_item: {
        type:String,
        required: true
    }
}); 


module.exports = mongoose.model('Donor', DonorSchema);