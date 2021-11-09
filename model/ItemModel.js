const mongoose = require("mongoose")
const Schema = mongoose.Schema

const itemSchema = new Schema({
    itemName:{
        type:String,
        required:true,
    },
    itemDescription:{
        type:String,
        required:true
    },
    itemQty:{
        type:Number,
        required:true
    },
    itemUnitPrice:{
        type:Number,
        required:true
    }
},{timestamps:true})

const item = mongoose.model("Item", itemSchema);
module.exports = item
