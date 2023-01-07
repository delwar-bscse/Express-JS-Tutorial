const express = require('express');
const app = express();
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const multer = require('multer');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//mongoose Schema & Model;
const userSchemn = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name is required"]
    },
    image:{
        type: String,
        required: true
    }
});
const userModel = mongoose.model("users",userSchemn);

//Uploads file;
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const name = Date.now() + '-' + file.originalname;
      cb(null, name)
    }
  });
const upload = multer({ storage: storage });


app.get("/register",(req,res)=>{
    res.status(200).sendFile(__dirname + "/index.html");
});
app.post("/register", upload.single("image"), async(req,res)=>{
    try {
        const newUser = await new userModel({
            name: req.body.name,
            image: req.file.filename
        }).save();
        res.status(201).send(newUser);
    } catch (error) {
        
    }
})

//Connect DataBase;
const connectDB = async()=>{
    try {
        const url_db = process.env.DB_URL || "mongodb://localhost:27017/UserTestDB";
        mongoose.set('strictQuery',true);
        await mongoose.connect(url_db);
        console.log("DB is connected");
    } catch (error) {
        console.log("DB is not connceted");
        process.exit(1);
    }
}

//Create server;
const PORT = process.env.PORT || 5000;
app.listen(PORT, async()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
    await connectDB();
});