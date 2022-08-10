const express = require('express');
const router = express.Router();
let ChatBotController = require("../controller/ChatBotController");

router.get('/', ChatBotController.index);
router.post('/send', ChatBotController.send);


module.exports = router;