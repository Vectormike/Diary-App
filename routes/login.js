const express = require('express');
const router = express.Router();
const passport = require('passport');

// --> Login page
router.get('/login', (req, res) => {
    res.render('login');
});

// --> Login config
router.post('/login', passport.authenticate('local', {
    successRedirect: '/secret',
    failureRedirect: '/login'
}), (req, res) => {

});

module.exports = router;