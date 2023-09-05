const mongoose = require("mongoose");
const Image = require("./Image");

const {
  DEFAULT_STRING_SCHEMA_REQUIRED,
} = require("./helpers/mongooseValidation");

const HomePageMenSchema = new mongoose.Schema({
  gender: DEFAULT_STRING_SCHEMA_REQUIRED,
  button: DEFAULT_STRING_SCHEMA_REQUIRED,
  image: Image,
  categoryRoute: DEFAULT_STRING_SCHEMA_REQUIRED,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const menHomePage = mongoose.model("menHomePage", HomePageMenSchema);

module.exports = menHomePage;
