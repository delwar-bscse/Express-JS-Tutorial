const express = require('express');
const app = express();
const userRouter = require('./routes/users.route');

app.use("/api/user",userRouter);
app.get("/",(req,res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname+"/views/index.html");
});
app.get("/register",(req,res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname+"/views/register.html");
});
app.get("/login",(req,res)=>{
    res.cookie("name","M D Hossain");
    res.cookie("age","25");
    res.header("id","2022");
    // res.clearCookie("name");
    // res.clearCookie("age");
    res.end();
})
app.get("*",(req,res)=>{
    res.send("404!!! Not found URL");
});

module.exports = app;