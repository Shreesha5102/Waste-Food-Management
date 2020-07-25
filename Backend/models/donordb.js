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
<<<<<<< HEAD
    Street: {
        type: String,
        required: true
    },
    Town: {
        type: String,
        required: true
    },
    City: {
=======
    Items: {
        type: String,
        required: true
    },
    address: {
>>>>>>> e5ba816f6336fc207cbdf811e80c9d5f9d6c053d
        type: String,
        required: true
    }
}) 


module.exports = mongoose.model('Donor', DonorSchema);