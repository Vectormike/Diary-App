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

module.exports = router;