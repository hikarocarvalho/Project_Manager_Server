const express = require('express');
const router = express.Router();
const Users = require('../models/users');
const {GodResponse,BadResponse} = require('../models/responses');
const name = "users";

router.post("/add", async (req, res) => {
    await Users.create(req.body)
    .then(() => {
        GodResponse(res,name,"create",0,"");
    }).catch((err) => {
        BadResponse(res,err,name,"create");
    })

});

router.get('/',async (req, res) => {
    await Users.find({})
    .then((user) => {
        GodResponse(res,name,"create",1,user);
    })
    .catch((err) => {
        BadResponse(res,err,name,"get");
    })
});
router.get("/:id",async(req,res)=>{
    await Users.findById({_id:req.params.id})
    .then((user) =>{
        GodResponse(res,name,"create",1,user);
    })
    .catch((err)=>{
        BadResponse(res,err,name,"get");
    });
})

router.put("/update/:id",async (req, res) => {
    await Users.updateOne({_id:req.params.id},req.body)
    .then(()=>{
        GodResponse(res,name,"update",0,"");
    }).catch((err)=>{
        BadResponse(res,err,name,"update");
    });
});

router.delete("/delete/:id",async (req, res) => {
    await Users.deleteOne({_id:req.params.id})
    .then(()=>{
        GodResponse(res,name,"delete",0,"");
    }).cath((err)=>{
        BadResponse(res,err,name,"delete");
    })
});

module.exports = router;