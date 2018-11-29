const express = require('express');
const router = express.Router();
const blog = require('../models/blogs');


//New route
app.get("/index/new", (req, res) => {
    res.render("new"); 
});

module.exports = router;