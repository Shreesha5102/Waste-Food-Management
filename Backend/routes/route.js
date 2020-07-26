const express = require('express');
const router = express.Router();

const donors = require('../models/donordb');
const reciever = require('../models/recieverdb');


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
})

module.exports = router;

