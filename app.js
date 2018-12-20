const express = require("express");
const app = express();
const bcrypt = require('bcryptjs');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require('method-override');
const expressSanitizer = require('express-sanitizer');
const router = express.Router();
const passport = require('passport');
const localStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const User = require('./models/user');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());

// Express Session
app.use(require('express-session')({
  secret: "Vectormike",
  resave: true,
  saveUninitialized: true
}));


require('./src/config/passport.js')(app);
passport.use(new localStrategy(User.authenticate()));
// Passport init
app.use(passport.initialize());
app.use(passport.session());

const home = require('./routes/home');
const index = require('./routes/index');
const add = require('./routes/add');
const show = require('./routes/show');
const edit =  require('./routes/edit');
const remove = require('./routes/delete');
const register = require('./routes/register');
const login = require('./routes/login');
const secret = require('./routes/secret');


app.set("view engine", "ejs");
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
app.use('/', register);
app.use('/', login);
app.use('/', secret);

// Listening on this port
app.listen(3000, function(){
    console.log("Diary is running");
});
