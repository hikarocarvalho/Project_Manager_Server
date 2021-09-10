const express = require('express');
const router = express.Router();

router.post("/add", (req, res) => {
    res.send("route /add tasks");
});

router.get('/', (req, res) => {
    res.send("route ok / tasks");
});

router.put("/update", (req, res) => {
    res.send("route /update tasks");
});

router.delete("/delete", (req, res) => {
    res.send("route /delete tasks");
});

module.exports = router;