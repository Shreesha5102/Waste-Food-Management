const express = require('express');
const router = express.Router();

const reciever = require('../models/recieverdb');

router.get('/', async (req,res) => {
    try{
        console.log("Entries in DB")
        const reppo = await reciever.find();
          res.json(reppo);
        }catch(err){
            res.json({message:err});
        }
    });
    

module.exports = router;
