const express = require('express');
const app = express();
const usersRoter = require("./routes/users.route");
const productsRouter = require("./routes/products.route");

app.use(express.urlencoded({extended : true}));

app.use(usersRoter);
app.use(productsRouter);

app.use((req,res,next)=>{
    res.status(404).json({
        message : "Error url"
    })
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});