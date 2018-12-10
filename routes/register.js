const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');



router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', (req, res) => {
    req.body.username
    req.body.email
    req.body.password
    User.register(new User({username:req.body.username, username2:req.body.email}), req.body.password, (err, user) => {
        if(err){
            //Error message
            console.log(err);
            return res.send(err);
        } else {
            res.send('Passed');
        }
    })
});

module.exports = router;