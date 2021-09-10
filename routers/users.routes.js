const express = require('express');
const router = express.Router();
const Users = require('../models/users');

router.post("/add", async (req, res) => {
    await Users.create(req.body)
    .then(() => {
        res.status(200).send("You have create a new Users.");
    }).catch((err) => {
        res.status(400).send("You have some problem with the creation of this new Users, try again!");
        console.error(err);
    })

});

router.get('/',async (req, res) => {
    await Users.find({})
    .then((task) => {
        res.status(200).send(task);
    })
    .catch((err) => {
        res.status(400).send("You have some problem with this Users!");
        console.log(err);
    })
});
router.get("/:id",async(req,res)=>{
    await Users.findById({_id:req.params.id})
    .then((task) =>{
        res.status(200).send(task);
    })
    .catch((err)=>{
        res.status(400).send("This Users maybe do not exist!");
        console.log(err);
    });
})

router.put("/update/:id",async (req, res) => {
    await Users.updateOne({_id:req.params.id})
    .then(()=>{
        res.status(200).send("You has updated with sucess");
    }).catch((err)=>{
        res.status(400).send("This update has some problem!");
        console.log(err);
    });
});

router.delete("/delete/:id",async (req, res) => {
    await Users.deleteOne({_id:req.params.id})
    .then(()=>{
        res.status(200).send("You has deleted with sucess");
    }).cath((err)=>{
        res.status(400).send("This try delete some Users, but de request do not make this."
                                +"Maybe some data value have some problem try again");
        console.log(err);
    })
});

module.exports = router;