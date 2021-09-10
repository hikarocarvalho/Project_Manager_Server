const express = require('express');
const router = express.Router();

router.post("/add", (req, res) => {
    res.send("route /add project");
});

router.get('/', (req, res) => {
    res.send("route ok / project");
});

router.put("/update", (req, res) => {
    res.send("route /update project");
});

router.delete("/delete", (req, res) => {
    res.send("route /delete project");
});

module.exports = router;