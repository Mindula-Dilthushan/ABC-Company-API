const express = require("express")
const router = express.Router()

const itemModel = require("../model/ItemModel")


router.get("/item/findAll", async (req, res)=>{
    await itemModel.find().then(data=>{
        res.send(data)
    })
})

router.post("/item/add", async (req, res)=>{
    const {itemName, itemDescription, itemQty,itemUnitPrice} = req.body
    const data = {itemName, itemDescription, itemQty,itemUnitPrice}
    await itemModel.create(data).then(data=>{
        if(data)
            res.send(data)
        else
            res.send(false)
    }).catch(err=>{
        if(err)res.send(err.message())
    })
})

router.put("/item/update", async(req, res)=>{

    const data = req.body;

    await itemModel.findOneAndUpdate({_id:data.id}, data, {
        useFindAndModify:true,
        new:true
    }).then(data=>{
        res.send(data)
    }).catch(err=>{
        if(err) res.send(err.message())
    })
})

router.delete("/item/delete", async(req, res)=>{

    const id = req.body.id;
    await itemModel.deleteOne({_id:id}).then(data=>{
        if(data)
            res.send(data)
        else
            res.send("No item found by that ID")
    }).catch(err=>{
        if(err)
            res.send(err)
    })
})

module.exports = router;
