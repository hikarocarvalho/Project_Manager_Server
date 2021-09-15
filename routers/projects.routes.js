const express = require('express');
const router = express.Router();
const Projects = require('../models/projects');
const {GodResponse,BadResponse} = require('../models/responses');

const name = "Project";

router.post("/add", async (req, res) => {
    await Projects.create(req.body)
    .then(() => {
        GodResponse(res,name,"create",0,"");
    }).catch((err) => {
        BadResponse(res,err,name,"create");
    })

});
router.get('/byuser/:userid',async (req, res) => {
    await Projects.find({user_id:req.params.userid})
    .then((project) => {
        GodResponse(res,name,"get",1,project);
    })
    .catch((err) => {
        BadResponse(res,err,name,"get");
    })
});
router.get('/',async (req, res) => {
    await Projects.find({})
    .then((project) => {
        GodResponse(res,name,"get",1,project);
    })
    .catch((err) => {
        BadResponse(res,err,name,"get");
    })
});
router.get('/:id',async (req, res) => {
    await Projects.find({_id:req.params.id})
    .then((project) => {
        GodResponse(res,name,"get",1,project);
    })
    .catch((err) => {
        BadResponse(res,err,name,"get");
    })
});

router.put("/update/:id",async (req, res) => {
    await Projects.updateOne({_id:req.params.id},req.body)
    .then(()=>{
        GodResponse(res,name,"update",0,"");
    }).catch((err)=>{
        BadResponse(res,err,name,"update");
    });
});

router.delete("/delete/:id",async (req, res) => {
    await Projects.deleteOne({_id:req.params.id})
    .then(()=>{
        GodResponse(res,name,"delete",0,"");
    }).cath((err)=>{
        Response(res,err,name,"delete");
    })
});

module.exports = router;