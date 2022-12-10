require('dotenv').config();
const express = require('express');
const app = express();




app.get("/",(req,res)=>{
    console.log('I am Home Console')
    res.send("Home Route");
});

app.get("/about", (req,res)=>{
    console.log("I am About Console");
    res.send("About Route");
});

app.use((req,res,next)=>{
    res.send("404 bad URL request");
});

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});