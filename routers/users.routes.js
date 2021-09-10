const express = require('express');
const router = express.Router();

router.post("/add",async (req, res) => {
    res.send("route /add user");
});

router.get('/',async (req, res) => {
    res.send("route ok / user");
});

router.put("/update",async (req, res) => {
    res.send("route /update user");
});

router.delete("/delete",async (req, res) => {
    res.send("route /delete user");
});

module.exports = router;