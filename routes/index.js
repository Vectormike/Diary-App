const express = require('express');
const mongoose = require('mongoose');
const blog = require('../models/blogs');
const router = express.Router();

//Index route
router.get("/index", function(req, res){
    blog.find({}, function(err, posts){
        if(err){
            console.log(err);
        } else {
            res.render("index", {posts:posts});
        }
    });
});
router.get("/", (req, res) => {
    res.redirect("/index");
});

module.exports = router;