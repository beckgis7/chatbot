const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
let ChatBotController = require("../controller/ChatBotController");

router.get('/', ChatBotController.index);
router.post('/send', ChatBotController.send);
router.get('/whatsapp', ChatBotController.whatsapp);
router.post('/whatsapp', ChatBotController.whatsapp);


module.exports = router;