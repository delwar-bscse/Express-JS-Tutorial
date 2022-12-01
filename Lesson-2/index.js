const express = require('express');
const app = express();


const PORT = 3000;

app.get("/",(req,res)=>{
    // const name = req.query.name;
    // const id = req.query.id;

    const {name, id} = req.query;

    res.send(`Student Name ${name} & ID ${id}`);
})

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})