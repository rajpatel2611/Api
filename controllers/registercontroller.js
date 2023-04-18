const express = require('express');
const registermodel = require('../models/registermodel');

const passport = require('passport');
const jwtdata = require('jsonwebtoken');

const register = async(req,res)=>{
    try{
        let register = await registermodel.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
        });
        if(register){
            return res.json({"status" : "1", "msg" : "user succsessfully insert"});
        }else{
            return res.json({"status" : "0", "msg" : "user succsessfully not insert"});
        }
    }catch(err){
        console.log(err);
        return false;
    }
}

const view = async(req,res)=>{
    try{
        let view = await registermodel.find({});
        if(view){
            return res.json({"status" : "1", "msg" :view});
        }
        else{
            return res.json({"status" : "0", "msg" : "record not found"});
        }
    }
    catch(err){
        console.log(err);
        return false;
    }
}

const deletedata = async(req,res)=>{
    try{
        let id = req.query.id;
        let deletedata = await registermodel.findByIdAndDelete(id);
        if(deletedata){
            return res.json({"status" : "1", "msg" : "record succsesfully deleted"});
        }else{
            return res.json({"status" : "0", "msg" : "record not delete"});
        }
    }
    catch(err){
        console.log(err);
        return false;
    }
}

const edit = async(req,res)=>{
    try {
        let id = req.body.id;
        let edit = await registermodel.findByIdAndUpdate(id,{
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
        })
        if(edit){
            return res.json({"status" : "1", "msg" : "user update"});
        }else{
            return res.json({"status" : "0", "msg" : "user not update"});
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const login = async(req,res)=>{
    try {
        let email = req.body.email;
        let user = await registermodel.findOne({email : email})
        if(!user || user.password != req.body.password){
            return res.json({"status" : "0","msg":"user and password not metch"});
        }
        let token = jwtdata.sign(user.toJSON(),"raj",{expiresIn : 1000*60*60});
        return res.json({"status" : "1","msg" : token});

    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {register,view,deletedata,edit,login}