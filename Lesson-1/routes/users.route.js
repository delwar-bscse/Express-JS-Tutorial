const express = require('express');
const router = express.Router();

router.get("/user",(req,res)=>{
    res.status(200).json({
        Name : "M D Hossain",
        Age : "25"
    })
});

module.exports = router;