const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require('method-override');
const expressSanitizer = require('express-sanitizer');
const router = express.Router();
const index = require('./routes/index');
const add = require('./routes/add');
const show = require('./routes/show');
const edit =  require('./routes/edit');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(express.static("public"));
app.use(methodOverride("_method"));

//Connect all routes to the application
app.use('/', index);
app.use('/', add);
app.use('/', show);
app.use('/', edit);






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


app.listen(3000, function(){
    console.log("Blog is running");
});
