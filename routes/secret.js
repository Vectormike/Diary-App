const express = require('express');
const router = express.Router();

router.get('/secret', (req, res) => {
    res.render('secret');
});

module.exports = router;