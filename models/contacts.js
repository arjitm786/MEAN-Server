const mongoose = require('mongoose');


var ContactSchema = mongoose.Schema(
    {
        first_name:{
            type: String,
            required: true
        },
        last_name:{
            type: String,
            require: false
        },
        phone_no:{
            type: String,
            required: true
        }
    }
);

ContactSchema = module.exports = mongoose.model('Contact', ContactSchema);