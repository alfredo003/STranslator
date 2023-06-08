const express = require("express");
const cors =require("cors")
const app = express();
const PORT = 3000;
app.use(cors())
app.use(express.json())
app.use('/',require('./src/router'))

app.listen(PORT,()=>{console.log("SERVER RUNNING IN PORT :",PORT)})