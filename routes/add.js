const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const blog = require('../models/blogs');


//New route
router.get("/index/new", (req, res) => {
    res.render("new"); 
});


//CREATE route
router.post("/index", (req, res) => {
    //Create new post in Mongoose
    req.body.sanitized = req.sanitize(req.body.saySomething);
    blog.create(req.body.sanitized, function(err, newPost){
        if(err){
            //Refresh page
            res.render("new");
        } else {
            //Redirect to the index page
            res.redirect("/index");
        }
    });
});



module.exports = router;