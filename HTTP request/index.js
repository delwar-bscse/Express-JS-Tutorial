const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config();

app.use(morgan("dev"));

app.get("/products",(req,res)=>{
    res.json({"Message": "Home Route"});
});

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});