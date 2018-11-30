const express = require('express');
const router = express.Router();
const blog = require('../models/blogs');

//SHOW route
router.get("/index/:id", (req, res) => {
    blog.findById(req.params.id, (err, foundPost) => {
        if(err){
           res.send("Error page"); 
        } else {
            res.render("info", {post:foundPost})
        }
    });
});

module.exports = router;