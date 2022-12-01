const express = require('express');
const app = express();


const PORT = 3000;

app.get("/",(req,res)=>{
    const id = req.header('id');
    const name = req.header('name');

    res.send(`Name : ${id} & Name : ${name}`);
})

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
}) 