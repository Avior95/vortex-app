const mongoose = require("mongoose");
const Image = require("./Image");

const {
  DEFAULT_STRING_SCHEMA_REQUIRED,
} = require("./helpers/mongooseValidation");

const HomePageWomenSchema = new mongoose.Schema({
  gender: DEFAULT_STRING_SCHEMA_REQUIRED,
  button: DEFAULT_STRING_SCHEMA_REQUIRED,
  categoryRoute: DEFAULT_STRING_SCHEMA_REQUIRED,
  image: Image,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const womenHomePage = mongoose.model("womenHomePage", HomePageWomenSchema);

module.exports = womenHomePage;
