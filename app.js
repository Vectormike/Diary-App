const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require('method-override');
const expressSanitizer = require('express-sanitizer');
const router = express.Router();
const index = require('./routes/index');
const add = require('./routes/add');


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(express.static("public"));
app.use(methodOverride("_method"));

//Connect all routes to the application
app.use('/', index);
app.use('/add', add);







//CREATE route
app.post("/index", (req, res) => {
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

//SHOW route
app.get("/index/:id", (req, res) => {
    blog.findById(req.params.id, (err, foundPost) => {
        if(err){
           res.send("Error page"); 
        } else {
            res.render("info", {post:foundPost})
        }
    });
});

//EDIT route 
app.get("/index/:id/edit", (req, res) => {
    blog.findById(req.params.id, (err, editPost) => {
        if(err){
            res.redirect('/index');
        } else {
            res.render('edit', {blog:editPost});
        }
    });
});

//UPDATE route
app.put('/index/:id', (req, res) => {
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
app.get('/index/:id/delete', (req, res) => {
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
