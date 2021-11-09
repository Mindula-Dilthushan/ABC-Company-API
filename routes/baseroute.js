const express = require("express")
const route = express.Router()

route.get("/", (req, res)=>{
    res.send("<h1> ABC Company !!!</h1>")
})

module.exports = route;
