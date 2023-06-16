const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const md5 = require("md5");
const validator = require("validator");
const mongooseErrorHandlers = require("mongoose-mongodb-errors");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
    required: "Please supply a username",
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, "Invalid Email Address"],
    required: "Please enter an email!",
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  profilePicUrl: {
    type: String,
    required: false,
    trim: true,
  },
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(mongooseErrorHandlers);

module.exports = mongoose.model("User", userSchema);
