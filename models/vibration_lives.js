const mongoose = require('mongoose')

const vibration_lives = mongoose.Schema({
    xyz:[[String]],
    dID: String,
    type:String,
    date:String,
    hour:String
})
module.exports= mongoose.model('vibration_live',vibration_lives)