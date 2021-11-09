const express = require("express")
const router = express.Router()

const loginModel = require("../model/LoginModel")


router.get("/login/findAll", async (req, res)=>{
    await loginModel.find().then(data=>{
        res.send(data)
    })
})

router.post("/login/add", async (req, res)=>{
    const {userName, email, password,forPassword} = req.body
    const data = {userName, email, password,forPassword}
    await loginModel.create(data).then(data=>{
        if(data)
            res.send(data)
        else
            res.send(false)
    }).catch(err=>{
        if(err)res.send(err.message())
    })
})

router.put("/login/update", async(req, res)=>{

    const data = req.body;

    await loginModel.findOneAndUpdate({_id:data.id}, data, {
        useFindAndModify:true,
        new:true
    }).then(data=>{
        res.send(data)
    }).catch(err=>{
        if(err) res.send(err.message())
    })
})

router.delete("/login/delete", async(req, res)=>{

    const id = req.body.id;
    await loginModel.deleteOne({_id:id}).then(data=>{
        if(data)
            res.send(data)
        else
            res.send("No user found by that ID")
    }).catch(err=>{
        if(err)
            res.send(err)
    })
})

module.exports = router;
