const express = require('express');
const router = express.Router();

router.get("/register",(req,res)=>{
    res.send("I am get ruquest at Register route.");
});
router.get("/login",(req,res)=>{
    res.send("I am get ruquest at Login route.");
});

module.exports = router;