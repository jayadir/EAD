const mongoose = require('mongoose');
const Students=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    roll:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    currentStudent:{
        type:Boolean,
        required:true,
        default:true
    }
})
module.exports=mongoose.model('Students',Students)