const mongoose = require("mongoose");

const AadharCardSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  homeAddress: {
    type: String,
    required: true,
  },
  aadharNumber: {
    type: String,
    unique: true,
    required: true,
  },
});

const AadharCard = mongoose.model("AadharCard", AadharCardSchema);

module.exports = AadharCard;
