const express=require('express');
const route = express.Router();
const api = require("./api/Translated");

route.route("/translator").post(api.translator);

route.route("/").get((req,res)=>{
  res.json("Done");
});

module.exports = route;