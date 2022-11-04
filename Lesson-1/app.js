const express = require('express');
const app = express();
const userRouter = require('./routes/users.route');

app.use("/api/user",userRouter);
app.get("/",(req,res)=>{
    res.send("I am  Home route");
});
app.get("/register",(req,res)=>{
    res.status(200).json({
        massage:"I am register route",
        statusCode: 200
    });
});
app.get("/login",(req,res)=>{
    res.send("I am login route")
})
app.get("*",(req,res)=>{
    res.send("404!!! Not found URL");
});

module.exports = app;