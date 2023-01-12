const express = require('express');
const app = express();
require('dotenv').config();
const { body, validationResult } = require('express-validator');

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/",(req,res)=>{
    res.status(200).json({"Message":"Home Route"});
});

app.post("/api/register",
body('name')
    .trim()
    .notEmpty()
    .withMessage('Empty Input')
    .isLength({min:5})
    .withMessage('At least 5 letters')
    .isLength({max:10})
    .withMessage("At highest 10 letters")
,
body('email')
    .trim()
    .notEmpty()
    .withMessage('Empty Input')
    .isEmail()
    .withMessage('Enter valid email')
,
body('password')
    .trim()
    .notEmpty()
    .withMessage('Empty Input')
    .isLength({min:6})
    .withMessage('At least 6 characters')
    .isLength({max:10})
    .withMessage("At highest 10 characters")
,
body('dob')
    .trim()
    .notEmpty()
    .withMessage('Empty Input')
    .isISO8601()
    .toDate()
    .withMessage('DATE FORMATE REQUIRE YY-MM-DD')
,
(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    };
    next();
},
(req,res)=>{
    try {
        const {name, email, password, dob} = req.body;
        const newUser = {
            name,
            email,
            password,
            dob
        };
        res.status(201).json({
            Message: "User is created",
            New_User: newUser
        });
    } catch (error) {
        res.status(404).json({Message: error.message});
        process.exit(1);
    };
});

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});



















/*

body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is missing')
    .isLength({max:10})
    .withMessage("Name must have at heigest 10 letters")
    .isLength({min:5})
    .withMessage("Name must have at least 5 letters"),
body('email').trim().notEmpty().isEmail(),
body('dob').trim().notEmpty().isISO8601().toDate(),

(req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    };
    next();
}
*/