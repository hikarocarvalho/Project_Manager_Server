const express = require('express');
const router = express.Router();
const TaskPriority = require('../models/task_priority');

router.post("/add", async (req, res) => {
    await TaskPriority.create(req.body)
    .then(() => {
        res.status(200).send("You have create a new TaskPriority.");
    }).catch((err) => {
        res.status(400).send("You have some problem with the creation of this new TaskPriority, try again!");
        console.error(err);
    })

});

router.get('/',async (req, res) => {
    await TaskPriority.find({})
    .then((priority) => {
        res.status(200).send(priority);
    })
    .catch((err) => {
        res.status(400).send("You have some problem with this Priority!");
        console.log(err);
    })
});
router.get("/:id",async(req,res)=>{
    await TaskPriority.findById({_id:req.params.id})
    .then((priority) =>{
        res.status(200).send(priority);
    })
    .catch((err)=>{
        res.status(400).send("This Priority maybe do not exist!");
        console.log(err);
    });
})

router.put("/update/:id",async (req, res) => {
    await TaskPriority.updateOne({_id:req.params.id})
    .then(()=>{
        res.status(200).send("You has updated with sucess");
    }).catch((err)=>{
        res.status(400).send("This update has some problem!");
        console.log(err)
    });
});

router.delete("/delete/:id",async (req, res) => {
    await TaskPriority.deleteOne({_id:req.params.id})
    .then(()=>{
        res.status(200).send("You has deleted with sucess");
    }).cath((err)=>{
        res.status(400).send("This try delete some TaskPriority, but de request do not make this."
                                +"Maybe some data value have some problem try again");
        console.log(err)
    })
});

module.exports = router;