const express = require('express');
const router = express.Router();


//Landing page route..
router.get('/home', (req, res) => {
    res.render('home');
});

router.get('/', (req, res) => {
     res.redirect('/home');
});

module.exports = router;