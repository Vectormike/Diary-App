const express = require('express');
const router = express.Router();
const isLoggedIn = require('../src/config/loggedIn');

router.get('/logout',isLoggedIn, (req, res) => {
    req.logout();
    res.redirect('/home');
});

module.exports = router;