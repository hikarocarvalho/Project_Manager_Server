const express = require('express');
const router = express.Router();
const TaskPriority = require('../models/task_priority');
const {GodResponse,BadResponse} = require('../models/responses');
const name = "task priority";

router.post("/add", async (req, res) => {
    await TaskPriority.create(req.body)
    .then(() => {
        GodResponse(res,name,"create",0,"");
    }).catch((err) => {
        BadResponse(res,err,name,"create");
        
    })

});

router.get('/',async (req, res) => {
    await TaskPriority.find({})
    .then((priority) => {
        GodResponse(res,name,"get",1,priority);
    })
    .catch((err) => {
        BadResponse(res,err,name,"get");
        
    })
});
router.get("/:id",async(req,res)=>{
    await TaskPriority.findById({_id:req.params.id})
    .then((priority) =>{
        GodResponse(res,name,"get",1,priority);
    })
    .catch((err)=>{
        BadResponse(res,err,name,"get");
        
    });
})

router.put("/update/:id",async (req, res) => {
    await TaskPriority.updateOne({_id:req.params.id},req.body)
    .then(()=>{
        GodResponse(res,name,"update",0,"");
    
    }).catch((err)=>{
        BadResponse(res,err,name,"update");
        
    });
});

router.delete("/delete/:id",async (req, res) => {
    await TaskPriority.deleteOne({_id:req.params.id})
    .then(()=>{
        GodResponse(res,name,"delete",0,"");
        
    }).cath((err)=>{
        BadResponse(res,err,name,"delete");
    })
});

module.exports = router;