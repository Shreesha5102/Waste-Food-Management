const express=require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const donorRoutes = require("./routes/route");
const recieverRoutes = require("./routes/route1");

app.use(cors());  //cors is used to allow cross-origin-access
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/Waste_food",{useNewUrlParser:true}, (err)=>{
    if(!err){console.log('MongoDB Connection succeeded.');}
    else{console.log('Error in Connection:' + err);}
});

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');  // Website you wish to allow to connect
   
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');  // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');  // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();  // Pass to next layer of middleware
});

app.use('/route', )

app.listen(4000);