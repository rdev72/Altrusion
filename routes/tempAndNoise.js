const express = require('express')
const temp_noise_lives = require('../models/temp_nosie_lives')
const router = express.Router()

// get Temp by date and hourly basis
router.get('/temp',(req,res)=>{
    temp_noise_lives.find({hour:req.query.hour,date:req.query.date})
    .then(data =>{
        console.log(data);
        data.forEach(e => {res.json(`T:${e.T}`)});    
    } ).catch(error=> console.error(error))
})

// get Temp by date and  24 Hr
router.get('/temp/fullDay',(req,res)=>{
    temp_noise_lives.find({date:req.query.date}).lean()
    .then(data =>{
        console.log(data);
        data.forEach(e => {res.json(`T:${e.T}`)});    
    } )
    .catch(error=> console.error(error))
})

// get Noise by date and hourly basis
router.get('/noise',(req,res)=>{
    temp_noise_lives.find({hour:req.query.hour,date:req.query.date})
    .then(data =>{
        console.log(data);
        data.forEach(e => {res.json(`N:${e.N}`)});    
    } ).catch(error=> console.error(error))
})

// get Noise by date and  24 Hr
router.get('/noise/fullDay',(req,res)=>{
    temp_noise_lives.find({date:req.query.date}).sort('hour').lean()
    .then(data =>{
        console.log(data);
        data.forEach(e => {res.json(`N:${e.N}`)});    
    } )
    .catch(error=> console.error(error))
})

module.exports = router