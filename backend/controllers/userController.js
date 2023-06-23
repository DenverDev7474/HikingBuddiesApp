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
  debugger;

  sanitizeBody("username");
  sanitizeBody("firstName");
  sanitizeBody("lastName");
  sanitizeBody("city");
  sanitizeBody("email");
  sanitizeBody("confirmEmail");
  sanitizeBody("password");
  sanitizeBody("confirmPassword");

  req.checkBody("username", "You must supply a username!").notEmpty();
  req.checkBody("firstName", "You must supply a first name!").notEmpty();
  req.checkBody("lastName", "You must supply a last name!").notEmpty();
  req.checkBody("city", "You must supply a city!").notEmpty();
  req.checkBody("email", "That Email is not valid!").isEmail();
  req.checkBody("confirmEmail", "Your emails do not match!").equals(req.body.email);
  req.checkBody("password", "Password Cannot be Blank!").notEmpty();
  req.checkBody("confirmPassword", "Confirmed Password cannot be blank!").notEmpty();
  req.checkBody("confirmPassword", "Oops! Your passwords do not match").equals(req.body.password);
  
  const errors = req.validationErrors();
  if (errors) {
    res.status(400).json({ errors: errors });
    return;
  }
  next(); // there were no errors!
};


exports.register = async (req, res, next) => {
  debugger;
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
    // Handle successful registration
    res.status(200).json({ user: registeredUser });
    console.log(registeredUser);
    debugger;
  } catch (err) {
    // Handle registration error
    console.log("err", err);
    res.status(500).json({ error: err.message });

  }
};
