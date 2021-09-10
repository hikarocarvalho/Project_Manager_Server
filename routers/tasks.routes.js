const express = require('express');
const router = express.Router();
const Tasks = require('../models/tasks');

router.post("/add", async (req, res) => {
    await Tasks.create(req.body)
    .then(() => {
        res.status(200).send("You have create a new Project.");
    }).catch((err) => {
        res.status(400).send("You have some problem with the creation of this new Project, try again!");
        console.error(err);
    })

});

router.get('/',async (req, res) => {
    await Tasks.find({})
    .then((task) => {
        res.status(200).send(task);
    })
    .catch((err) => {
        res.status(400).send("You have some problem with this Project!");
        console.log(err);
    })
});
router.get("/:id",async(req,res)=>{
    await Tasks.findById({_id:req.params.id})
    .then((task) =>{
        res.status(200).send(task);
    })
    .catch((err)=>{
        res.status(400).send("This project maybe do not exist!");
        console.log(err);
    });
})

router.put("/update/:id",async (req, res) => {
    await Tasks.updateOne({_id:req.params.id})
    .then(()=>{
        res.status(200).send("You has updated with sucess");
    }).catch((err)=>{
        res.status(400).send("This update has some problem!");
        console.log(err);
    });
});

router.delete("/delete/:id",async (req, res) => {
    await Tasks.deleteOne({_id:req.params.id})
    .then(()=>{
        res.status(200).send("You has deleted with sucess");
    }).cath((err)=>{
        res.status(400).send("This try delete some project, but de request do not make this."
                                +"Maybe some data value have some problem try again");
        console.log(err);
    })
});

module.exports = router;