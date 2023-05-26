const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 256,
  },
  email: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 256,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
  biz: {
    type: Boolean,
    default: false,
    required: true,
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Entity",
    required: false,
    minlength: 0,
    maxlength: 9,
  },
  createdAt: { type: Date, default: Date.now },
  isAdmin: { type: Boolean, default: false },
  toggleState: { type: Boolean, default: false }, // Add this line
});

const User = mongoose.model("User", userSchema);

module.exports = User;
