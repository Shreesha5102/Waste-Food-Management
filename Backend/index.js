const express=require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());  //cors is used to allow cross-origin-access
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');  // Website you wish to allow to connect
   
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');  // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');  // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();  // Pass to next layer of middleware
});

app.listen(4000);