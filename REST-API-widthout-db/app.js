const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/user.route');

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(router);

//route error;
app.use((req,res,next)=>{
    res.status(404).json({message : "invalid route"});
});

//server error;
app.use((err,req,res,next)=>{
    res.status(500).json({message:"somthing broke"});
});

module.exports = app;