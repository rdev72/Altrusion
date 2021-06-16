const mongoose = require('mongoose')

const temp_noise_lives = mongoose.Schema({

    deviceID:String,
    date: Date,
    hour:Number,
    T:String,
    N:String,

})
module.exports= mongoose.model('temp_noise_live',temp_noise_lives)