const express = require('express');

const port = 9999;

const app = express();

const mongoose = require('mongoose');
mongoose.set('strictQuery',true);

const passport = require('passport')

const jwtdata = require('jsonwebtoken');

const db = require('./config/mongoose');

const passportjwt = require('./config/passport-jwt-stetargy');

const session = require('express-session');

app.use(session({
    secret: "raj",
    saveUninitialized:true,
    cookie: { maxAge: 1000*60*60 },
    resave: false 
}));

app.use(express.urlencoded());

app.use('/',require('./routes'));

app.listen(port,(err)=>{
    if(err){
        console.log("Server is not start");
        return false;
    }
    console.log("Server is start on port:-"+port);
})