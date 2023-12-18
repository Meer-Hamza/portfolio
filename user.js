const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    Name:{
        type:String,
    },
    Email:{
        type:String,
    },
    Phone:{
        type:Number,
    },
    Password:{
        type:String,
    },
    que:{
        type:String,
    },
})

const User = mongoose.model('User',userSchema)

module.exports = User