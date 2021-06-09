
const express = require('express')
const vibration_lives = require('../models/vibration_lives')
const router = express.Router()

// get data by date and  hourly basis

router.get('/',(req,res)=>{
    vibration_lives.find({date:req.query.date,hour:req.query.hour}).sort('hour').lean()
    .then(data => res.json(data)).catch(console.error)

})
module.exports = router