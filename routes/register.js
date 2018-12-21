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
    var password = req.body.password;
    var password2 = req.body.password2;
   
    User.register(new User({username:req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            res.render('/register');
        }
        else{
            console.log('Passed');
            passport.authenticate('local')(req, res, function () {
                res.redirect('/index');
            })
        }
    });
});

module.exports = router;