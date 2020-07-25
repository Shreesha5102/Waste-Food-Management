const mongoose = require('mongoose');

var RecieverSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Phone_no: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }

}) 


module.exports = mongoose.model('Reciever', RecieverSchema);