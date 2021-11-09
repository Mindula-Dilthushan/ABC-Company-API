const mongoose = require("mongoose")
const Schema = mongoose.Schema

const loginSchema = new Schema({
    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    forPassword:{
        type:String,
        required:true
    }
},{timestamps:true})

const login = mongoose.model("Login", loginSchema);
module.exports = login
