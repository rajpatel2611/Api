const mongoose = require('mongoose'); 
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
});

register = mongoose.model('rajaa', userSchema);

module.exports = register;