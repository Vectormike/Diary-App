const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/userauth", { useNewUrlParser: true });

let userSchema = new mongoose.Schema({
    username: {
        type: String, 
        trim:true
    },
    email: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    }
});

let User = mongoose.model('user', userSchema);
module.exports = User;