const mongoose = require("mongoose");
const Image = require("./Image");

const {
  DEFAULT_STRING_SCHEMA_REQUIRED,
} = require("./helpers/mongooseValidation");

const itemSchema = new mongoose.Schema({
  title: DEFAULT_STRING_SCHEMA_REQUIRED,
  subTitle: DEFAULT_STRING_SCHEMA_REQUIRED,
  gender: DEFAULT_STRING_SCHEMA_REQUIRED,
  price: {
    type: Number,
    required: true,
    trim: true,
    minLength: 2,
  },
  image: Image,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Item = mongoose.model("items", itemSchema);

module.exports = Item;