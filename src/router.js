const express=require('express');
const route = express.Router();
const api = require("./api/translator");

route.route("/translator").post(api.translator);


module.exports = route;