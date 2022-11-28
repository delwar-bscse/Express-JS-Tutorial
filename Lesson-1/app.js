const express = require('express');
const app = express();
const userRouter = require('./routes/users.route');

app.use("/api",userRouter);

app.get('/',(req,res)=>{
    res.statusCode = 202;
    res.sendFile(__dirname+"/views/index.html");
});

module.export = app;