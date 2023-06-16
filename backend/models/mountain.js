const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const mountainSchema = new mongoose.Schema({
  mountainName: {
    type: String,
    required: true,
  },
  elevation: {
    type: String,
    required: true,
  },
  moutainImageSrc: {
    type: String,
    required: true,
  },
  range: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Mountain", mountainSchema);
