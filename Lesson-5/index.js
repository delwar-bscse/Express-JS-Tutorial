 require('dotenv').config();
 const express = require('express');
 const app = express();

 app.get("/",(req,res)=>{
    res.send("I am home route");
 });

 const PORT = process.env.PORT || 3000;
 app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
 });