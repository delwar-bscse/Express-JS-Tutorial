const express = require('express');
const app = express();
const userRoute = require('./routes/users.route');

app.use("/api",userRoute);

app.get("/",(req,res)=>{
    res.statusCode = 202;
    res.sendFile(__dirname+"/views/index.html");
})
app.get("/login",(req,res)=>{
    res.statusCode = 202;
    res.sendFile(__dirname+"/views/login.html");
});
app.get("/register",(req,res)=>{
    res.statusCode = 202;
    res.sendFile(__dirname+"/views/register.html");
});
app.get("*",(req,res)=>{
    res.end("<h1>404!!! Error Page</h1>");
})

module.exports = app;