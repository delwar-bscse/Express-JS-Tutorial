const express = require('express');
const app = express();


const PORT = 3000;

app.get("/userId/:id/userAge/:age",(req,res)=>{
    const id = req.params.id;
    const age = req.params.age;

    res.send(`ID : ${id} & Age : ${age}`);
})

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})