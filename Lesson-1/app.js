const express = require('express');
const app = express();
const userRouter = require('./routes/users.route');

app.use("/api/user",userRouter);
app.get("/",(req,res)=>{
    res.send("I am get request at Home route");
});
app.get("*",(req,res)=>{
    res.send("404!!! Not found URL");
});

module.exports = app;