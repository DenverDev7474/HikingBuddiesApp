const mongoose = require("mongoose");
const User = mongoose.model("User");
const { promisify } = require("es6-promisify");
const { body, validationResult, sanitizeBody } = require("express-validator");

exports.getUserById = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(404).json({
        message: "Error getting user",
        error: err,
      });
    });
};

exports.validateRegister = (req, res, next) => {
  // console.log('the request body',req.body);
  req.sanitizeBody("username");
  req.sanitizeBody("firstName");
  req.sanitizeBody("lastName");
  req.sanitizeBody("city");

  req.checkBody("username", "You must supply a username!").notEmpty();
  req.checkBody("firstName", "You must supply a First Name!").notEmpty();
  req.checkBody("lastName", "You must supply a Last Name!").notEmpty();
  req.checkBody("city", "You must supply a city!").notEmpty();

  req
    .checkBody("confirmEmail", "Oops! Your Emails do not match")
    .equals(req.body.email);

  req.checkBody("email", "That Email is not valid!").isEmail();
  // add more checks here
  req.sanitizeBody("email").normalizeEmail({
    remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false,
  });
  req.checkBody("password", "Password cannot be blank!").notEmpty();
  req
    .checkBody("confirmPassword", "Confirmed Password cannot be blank!")
    .notEmpty();
  req
    .checkBody("confirmPassword", "Oops! Your passwords do not match")
    .equals(req.body.password);

  const errors = req.validationErrors();
  if (errors) {
    console.log(errors);
    return; // stop the fn from running
  }
  next(); // there were no errors!
};

exports.register = async (req, res, next) => {
  console.log("registering user");
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    city: req.body.city,
    profilePicUrl: "",
  });
  console.log(user);

  try {
    const registeredUser = await User.register(user, req.body.password);
    console.log("user registered");
    // Handle successful registration
    res.status(200).json({ user: registeredUser });
  } catch (err) {
    // Handle registration error
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
