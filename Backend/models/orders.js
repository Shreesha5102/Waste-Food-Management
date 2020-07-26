const mongoose = require('mongoose');

var OrderSchema = mongoose.Schema({
    dName: {
        type: String,
        required: true
    },
    rName: {
        type: String,
        required: true
    },
    dPhone_no: {
        type: String,
        required: true
    },
    rPhone_no: {
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
    }
   
}); 


module.exports = mongoose.model('Order', OrderSchema);