const express = require('express');

const messagesController = require('../controllers/messages.contoller');

const messageRouter = express.Router();

// routes method
messageRouter.get('/', messagesController.getMessages);

messageRouter.post('/', messagesController.postMessage);

module.exports = messageRouter;
