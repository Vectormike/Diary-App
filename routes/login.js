const express = require('express');
const router = express.Router();
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose', {useNewUrlParser: true});

// --> Login page
router.get('/login', (req, res) => {
    res.render('login');
});


// --> Login config
router.post('/login',  passport.authenticate('local', {
    successRedirect: '/index',
    failureRedirect: '/register'
}));

 

module.exports = router;