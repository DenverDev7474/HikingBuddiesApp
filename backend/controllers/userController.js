const mongoose = require("mongoose");
const User = mongoose.model("User");
const { promisify } = require("es6-promisify");
const { body, validationResult, check } = require("express-validator");

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
  body(req.body.username).trim().isLength({ min: 1 });
  body(req.body.firstName).trim().isLength({ min: 1 });
  body(req.body.lastName).trim().isLength({ min: 1 });
  body(req.body.city).trim().isLength({ min: 1 });
  body(req.body.email).trim().isLength({ min: 1 });
  body(req.body.confirmEmail).trim().isLength({ min: 1 });
  body(req.body.password).trim().isLength({ min: 1 });
  body(req.body.confirmPassword).trim().isLength({ min: 1 });

  body(req.body.username).escape();
  body(req.body.firstName).escape();
  body(req.body.lastName).escape();
  body(req.body.city).escape();
  body(req.body.email).escape();
  body(req.body.confirmEmail).escape();
  body(req.body.password).escape();
  body(req.body.confirmPassword).escape();

  body(req.body.username).trim().isAlphanumeric();
  body(req.body.firstName).trim().isAlphanumeric();
  body(req.body.lastName).trim().isAlphanumeric();
  body(req.body.city).trim().isAlphanumeric();
  body(req.body.email).trim().isEmail();
  body(req.body.confirmEmail).trim().isEmail();
  body(req.body.password).trim().isLength({ min: 8 });
  body(req.body.confirmPassword).trim().isLength({ min: 8 });
  
  body(req.body.confirmEmail).custom((value, { req }) => {
    if (value !== req.body.email) {
      throw new Error("Email confirmation does not match email");
    }
    return true;
  });

  body(req.body.confirmPassword).custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Password confirmation does not match password");
    } 
    return true;
  });

  
  body(req.body.username).custom((value, { req }) => {
    return User.findOne({ username: value }).then((user) => {
      if (user) {
        return Promise.reject("Username already in use");
      }
    });
  });

  body(req.body.email).custom((value, { req }) => {
    return User.findOne({ email: value }).then((user) => {
      if (user) {
        return Promise.reject("Email already in use");
      }
    });
  });


  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
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
    debugger;
  } catch (err) {
    // Handle registration error
    res.status(500).json({ error: err.message });
    console.log("register", err);
  }
  
};
