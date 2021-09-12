const express = require('express');
const router = express.Router();
const Tasks = require('../models/tasks');
const {GodResponse,BadResponse} = require('../models/responses');
const name = "tasks";

router.post("/add", async (req, res) => {
    await Tasks.create(req.body)
    .then(() => {
        GodResponse(res,name,"create",0,"");
    }).catch((err) => {
        BadResponse(res,err,name,"create");
    })

});

router.get('/',async (req, res) => {
    await Tasks.find({})
    .then((task) => {
        GodResponse(res,name,"create",1,task);
    })
    .catch((err) => {
        BadResponse(res,err,name,"get");
    })
});
router.get("/:id",async(req,res)=>{
    await Tasks.find({_id:req.params.id})
    .then((task) =>{
        GodResponse(res,name,"create",1,task);
    })
    .catch((err)=>{
        BadResponse(res,err,name,"get");
    });
})
router.get("/projectid/:id",async(req,res)=>{
    await Tasks.find({project_id:req.params.id})
    .then((task) =>{
        GodResponse(res,name,"create",1,task);
    })
    .catch((err)=>{
        BadResponse(res,err,name,"get");
    });
})

router.put("/update/:id",async (req, res) => {
    await Tasks.updateOne({_id:req.params.id},req.body)
    .then(()=>{
        GodResponse(res,name,"update",0,"");
    }).catch((err)=>{
        BadResponse(res,err,name,"update");
    });
});

router.delete("/delete/:id",async (req, res) => {
    await Tasks.deleteOne({_id:req.params.id})
    .then(()=>{
        GodResponse(res,name,"delete",0,"");
    }).cath((err)=>{
        BadResponse(res,err,name,"delete");
    })
});

module.exports = router;