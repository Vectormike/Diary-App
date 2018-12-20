const express = require('express');
const passport = require('passport');
const localStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');


// Logged In Middleware
module.exports = function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next;
  }
}