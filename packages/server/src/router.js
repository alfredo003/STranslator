const express=require('express');
const route = express.Router();
const api = require("./api/Translated");


route.route("/").get((req,res)=>{
  res.json("Done");
});
route.route("/translator").post(api.translator);
module.exports = route;