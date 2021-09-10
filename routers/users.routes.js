const express = require('express');
const router = express.Router();

router.post("/add", (req, res) => {
    res.send("route /add user");
});

router.get('/', (req, res) => {
    res.send("route ok / user");
});

router.put("/update", (req, res) => {
    res.send("route /update user");
});

router.delete("/delete", (req, res) => {
    res.send("route /delete user");
});

module.exports = router;