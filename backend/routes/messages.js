const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// GET all messages
router.get("/", async (req, res) => {
  const messages = await Message.find().sort({ timestamp: 1 });
  res.json(messages);
});

// POST a new message
router.post("/", async (req, res) => {
  const { user, text } = req.body;
  const newMessage = new Message({ user, text });
  await newMessage.save();
  res.status(201).json(newMessage);
});

module.exports = router;
