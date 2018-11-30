const express = require('express');
const router = express.Router();
const blog = require('../models/blogs');



//EDIT route 
router.get("/index/:id/edit", (req, res) => {
    blog.findById(req.params.id, (err, editPost) => {
        if(err){
            res.redirect('/index');
        } else {
            res.render('edit', {blog:editPost});
        }
    });
});


//UPDATE route
router.put('/index/:id', (req, res) => {
    req.body.sanitized = req.sanitize(req.body.saySomething);
    blog.findOneAndUpdate(req.params.id, req.body.blog, (err, updatedPost) => {
        if(err){
            res.redirect("/index");
        } else {
            res.redirect("/index/" + req.params.id);
        }
    });
});

module.exports = router;