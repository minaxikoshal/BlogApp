const express = require("express");
const Contact = require("../models/contact");
const contactRouter = express.Router();

contactRouter.post("/", async (req, res) => {
  try {
    const newMessage = new Contact(req.body);
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = contactRouter;
