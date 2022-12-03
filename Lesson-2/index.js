const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/register",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.post("/register",(req,res)=>{
    const name = req.body.fullName;
    const age = req.body.age;
    res.send(`<h1>Name : ${name} </br> Age : ${age}</h1>`);
});

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});