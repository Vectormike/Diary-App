const express = require('express');
const router = express.Router();
const isLoggedIn = require('../src/config/loggedIn');

router.get('/secret',isLoggedIn, (req, res) => {
    res.render('secret');
});

module.exports = router;