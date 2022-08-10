const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
    res.render("dashboard", { text: "World" })
})

router.get("/sendChat", function (req, res) {
 res.status(200).json({ text: "OK" })
})

module.exports = router;