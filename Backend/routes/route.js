const express = require('express');
const router = express.Router();

const donors = require('../models/donordb');
const reciever = require('../models/recieverdb');
const orders = require("../models/orders");

//Donor Routes
router.post('/donate', async (req, res) => {
    console.log(req.body);
    const repo = new donors({
        Name: req.body.Name,
        Phone_no: req.body.Phone_no,
        Street: req.body.Street,
        Country: req.body.Country,
        State: req.body.State,
        City: req.body.City,
        No_of_pep: req.body.No_of_pep,
        No_of_item: req.body.No_of_item
    });
    try {
        const savedDonor = await repo.save();
        res.json(savedDonor);
    }catch(err){
        res.json({message: err});
    }
});


//Reciver Routes
router.get('/recieve', async (req,res) => {
    try{
        console.log("Entries in DB");
        const reppo = await donors.find();
          res.json(reppo);
        }catch(err){
            res.json({message:err});
        }
});


router.post('/recievedetails', async (req, res)=>{
    console.log("Reciever Details");
    const recieverDetails = new reciever({
        Name : req.body.Name,
        Phone_no : req.body.Phone_no,
        Street: req.body.Street,
        Country: req.body.Country,
        State : req.body.State,
        City : req.body.City
    });
    try{
        const savedReciever = await recieverDetails.save();
        res.json(savedReciever);
    }catch(err){
        res.json({message: err})
    }
});

//order Routes
router.post("/order", async (req, res) => {
    console.log(req.body);
    const order = new orders({
        dName: req.body.dName ,
        rName: req.body.rName ,
        dPhone_no: req.body.dPhone_no ,
        rPhone_no: req.body.rPhone_no,
        rStreet: req.body.rStreet,
        rState: req.body.rState,
        rCity: req.body.rCity,
    });
    try {
        const savedOrder = await order.save();
        res.json(savedOrder);
    } catch (err) {
        res.json({message:err});
    }
});

router.get("/order", async(req, res) => {
    try{
        console.log("orders");
        const reppo = await orders.find();
          res.json(reppo);
        }catch(err){
            res.json({message:err});
        }
})

module.exports = router;

