const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passportLocalMongoose = require('passport-local-mongoose');
mongoose.connect("mongodb://localhost/userauth", { useNewUrlParser: true });


// User Schema
var UserSchema = new mongoose.Schema({
    username: {
        type: String, 
        trim:true, 
        unique: true
    },
   
    password: {
        type: String,
        trim: false,
    }
});

UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', UserSchema);
module.exports.createUser = (newUser, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports = User;

