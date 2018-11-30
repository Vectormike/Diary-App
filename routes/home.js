const express = require('express');
const router = express.Router();

//Landing page route..
router.get('/home', (req, res) => {
    res.render('home');
});

module.exports = router;