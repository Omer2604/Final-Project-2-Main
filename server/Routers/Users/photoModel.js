const mongoose = require("mongoose");

const { ObjectId } = mongoose.Types;

const photoSchema = new mongoose.Schema({
  likes: {
    type: Array,
    required: false,
    minlength: 0,
    maxlength: 1,
  },
  _id: {
    type: ObjectId,
    required: true,
  },
  img: {
    url: { type: String, required: true },
    alt: { type: String, required: true },
  },
  createdAt: { type: Date, default: Date.now },
  isAdmin: { type: Boolean, default: false },
});

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;
