const express = require("express")
const dotenv = require("dotenv")
const app = express()
app.use(express.json())

const mongoose = require('mongoose')

//requiring routers
const baseRoute = require("./routes/baseroute")
const itemRoute = require("./routes/ItemRoute")
const loginRoute = require("./routes/loginRoute")


//configuring dotenv(to access process.env)
dotenv.config()
const env = process.env

const itemModel = require("./model/ItemModel")
const loginModel = require("./model/LoginModel")


//app use
app.use(baseRoute)
app.use(itemRoute)
app.use(loginRoute)

//mongoDB connect


const URI = `mongodb+srv://kavindu:${env.PASSWORD}@cluster0.q46ot.mongodb.net/${env.DATABASE}?retryWrites=true&w=majority`


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
