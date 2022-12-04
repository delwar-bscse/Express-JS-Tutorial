const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.get("/circle",(req,res)=>{
    res.sendFile(__dirname+"/circle.html");
});
app.post("/circle",(req,res)=>{
    const radius = req.body.radius;
    const cir_area = Math.PI * radius * radius;
    res.send(`Circle Area : ${cir_area}`);
});

app.get("/triangle",(req,res)=>{
    res.sendFile(__dirname+"/triangle.html");
});
app.post("/triangle",(req,res)=>{
    const base = req.body.base;
    const height = req.body.height;
    const tri_area = 0.5 * base * height;
    res.send(`Triangle Area : ${tri_area}`);
});

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});