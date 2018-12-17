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
    //Create User's data as an object
    var userData = new User({
        username: req.body.username,
        
        password: req.body.password
    });
    
    // User not creating, passing else statement instead
        // Insert User's data into db using mongoose
    User.register({userData,  function(err, user){
        if(err){
            console.log(err);   
            }else{
            console.log('Passed');
            }
        }
    });

});

module.exports = router;