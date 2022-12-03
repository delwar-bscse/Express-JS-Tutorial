const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/user",(req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    res.send(`Welcome ${name}. You're ${age} years old.`);
})

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
}) 