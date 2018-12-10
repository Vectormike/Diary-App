const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose', {useNewUrlParser: true});



router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', (req, res) => {
    let password = req.body.password;
    let password2 = req.body.password2

    // User not creating, passing else statement instead
    if(password == password2){
        var newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password

        });
        
        User.createUser(newUser, (err, user) =>{
            if(err){
                console.log(err);
            } else{
                res.send('Passed');
            }
        })
    } else{
        res.send('Password mismatch');
    }

});

module.exports = router;