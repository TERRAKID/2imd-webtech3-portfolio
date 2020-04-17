const express = require('express');
const router = express.Router();
const messagesController = require('../../../controllers/api/v1/messages');

router.get("/", messagesController.getAll);

router.get("/", messagesController.getMessages);

router.get("/:id", messagesController.getMessagesId);

router.post("/", messagesController.postMessages);

router.put("/:id", messagesController.putMessagesId);

router.delete("/:id", messagesController.deleteMessagesId);

router.get("/:id", messagesController.getMessagesUser);

module.exports = router;