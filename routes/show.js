const express = require('express');
const router = express.Router();
const blog = require('../models/blogs');
const isLoggedIn = require('../src/config/loggedIn');

//SHOW route
router.get("/index/:id",isLoggedIn, (req, res) => {
    blog.findById(req.params.id, (err, foundPost) => {
        if(err){
           res.send("Error page"); 
        } else {
            res.render("info", {post:foundPost})
        }
    });
});

module.exports = router;