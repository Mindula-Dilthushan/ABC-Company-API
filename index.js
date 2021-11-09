const express = require("express")
const dotenv = require("dotenv")
const app = express()
app.use(express.json())

const mongoose = require('mongoose')

//requiring routers
const baseRoute = require("./routes/baseroute")
const itemRoute = require("./routes/ItemRoute")


//configuring dotenv(to access process.env)
dotenv.config()
const env = process.env

const itemModel = require("./model/ItemModel")


//app use
app.use(baseRoute)
app.use(itemRoute)

//mongoDB connect
const URI = `mongodb+srv://alpha:${env.PASSWORD}@cluster0.7xa41.mongodb.net/${env.DATABASE}?retryWrites=true&w=majority`

//server start
mongoose.connect(URI, {useUnifiedTopology:true, useNewUrlParser:true}).
then(res=>{
    app.listen(process.env.PORT || 3000, ()=>{
        console.log("DB connected !!!")
        console.log("Server is listening !!!")
    })
}).catch(err=>{
    if(err)
        console.log(err.message)
})
