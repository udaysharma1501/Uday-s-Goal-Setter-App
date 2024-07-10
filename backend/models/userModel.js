const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type:String,
        required: [true, "please add a name"]
    },
    email: {
        type:String,
        required: [true, "please add an email"],
        unique: true
    },
    password: {
        type:String,
        required: [true, "please add a password"]
    }
}, {
    // to automatically get a 'created at' and 'updated at' field
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);