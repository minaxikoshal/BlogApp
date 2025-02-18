const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    message: { type: String },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
