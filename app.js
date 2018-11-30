const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require('method-override');
const expressSanitizer = require('express-sanitizer');
const router = express.Router();
const home = require('./routes/home');
const index = require('./routes/index');
const add = require('./routes/add');
const show = require('./routes/show');
const edit =  require('./routes/edit');
const remove = require('./routes/delete');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(express.static("public"));
app.use(methodOverride("_method"));

//Connect all routes to the application
app.use('/', home);
app.use('/', index);
app.use('/', add);
app.use('/', show);
app.use('/', edit);
app.use('/', remove);

// Listening on this port
app.listen(3000, function(){
    console.log("Blog is running");
});
