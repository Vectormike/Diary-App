const express = require('express');
const blog = require('../models/blogs');
const router = express.Router();


//DESTROY route
router.get('/index/:id/delete', (req, res) => {
    blog.findOneAndDelete(req.params.id, (err, deleteD) => {
        if(err){
            res.redirect('/index/:id');
        } else {
            res.redirect('/index');
        }
    });
});

module.exports = router;