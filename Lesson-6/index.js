require('dotenv').config();
const express = require('express');
const app = express();

const middleWare = (req,res,next) => {
    console.log('Middle Ware Function');
    next();
};
app.use(middleWare);

app.get("/",(req,res)=>{
    console.log('I am Home Console')
    res.send("Home Route");
});

app.get("/about", (req,res)=>{
    console.log("I am About Console");
    res.send("About Route");
});

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});