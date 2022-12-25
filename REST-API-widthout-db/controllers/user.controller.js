const path = require('path');
const {v4:uuidv4} = require('uuid');
let users = require('../models/user.model');

const userHome = (req,res)=>{
    res.sendFile(path.join(__dirname + "/../views/index.html"));
}
const getUser = (req,res)=>{
    res.status(200).json(users);
}
const postUser = (req,res)=>{
    const user = {
        id : uuidv4(),
        uname : req.body.uname,
        email : req.body.email
    }
    users.push(user);
    res.status(200).json(users);
}
const putUser = (req,res)=>{
    const userid = req.params.id;
    const {uname,email} = req.body;
    users.filter((user)=>user.id==userid).map((user)=>{
        user.uname = uname;
        user.email = email;
    });
    res.status(200).json(users);
}
const deleteUser = (req,res)=>{
    const userid = req.params.id;
    users = users.filter((user)=>user.id != userid);
    res.status(200).json(users);
}

module.exports = {userHome, getUser, postUser, putUser, deleteUser};