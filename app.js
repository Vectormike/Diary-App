const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require('method-override');
const expressSanitizer = require('express-sanitizer');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(express.static("public"));
app.use(methodOverride("_method"));

// Connect Mongoose
mongoose.connect("mongodb://localhost/blog_app", {useNewUrlParser: true});
// DB Schema
let blogSchema = new mongoose.Schema({
    title: String,
    image: {
        type: String,
        default: "placeholder.jpg"
    }, 
    saySomething: String,
    created: {
        type: Date,
        default: Date.now
    }
});

//Compiling to Model
let blog = mongoose.model('blog', blogSchema);

// Dynamic creation
// blog.create({
//     title: "Sad",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSc6uGNxaa2xyP0ZR-PWPNElL_OGgy4UOO_LRo2X2V1RuO8dT",
//     saySomething: "How much sad can  be?"
// });

//Index route
app.get("/index", function(req, res){
    blog.find({}, function(err, posts){
        if(err){
            console.log(err);
        } else {
            res.render("index", {posts:posts});
        }
    });
});
app.get("/", (req, res) => {
    res.redirect("/index");
});

//New route
app.get("/index/new", (req, res) => {
    res.render("new"); 
});

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
    blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedPost) => {
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
