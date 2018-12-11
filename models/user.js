const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
mongoose.connect("mongodb://localhost/userauth", { useNewUrlParser: true });

// User Schema
let UserSchema = new mongoose.Schema({
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

let User = mongoose.model('user', UserSchema);
module.exports.createUser = (newUser, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}