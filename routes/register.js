const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose', {useNewUrlParser: true});



router.get('/register', (req, res) => {
    res.render('register');
});

// Register User
router.post('/register', function(req, res, next){
    let password = req.body.password;
    let password2 = req.body.password2
    
    // User not creating, passing else statement instead
    if(password == password2){
        User.createUser({username: req.body.username, email:req.body.email}, function(err, user){
            if(err){
                console.log(err);   
            }else{
                console.log('Passed');
            }
        });

    } else{
        res.send('Password mismatch');
    }

});

module.exports = router;