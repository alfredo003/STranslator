const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json())
app.use('/',require('./src/router'))

app.listen(PORT,()=>{console.log("SERVER RUNNING IN PORT :",PORT)})