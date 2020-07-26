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
    Street: {
        type: String,
        required: true
    },
    Country: {
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
    }
}) 


module.exports = mongoose.model('Reciever', RecieverSchema);