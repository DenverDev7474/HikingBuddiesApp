const passportAuth = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("User");

exports.login = (req, res, next) => {
  const passlogin = passportAuth.authenticate("local", (error, user) => {
    const login = req.logIn(user, (error) => {
      if (error) {
        return res.status(500).json({ error: error });
      }
      return res.json({ user: user });
    });
    return login;
  });

  res.json(passlogin);

  next();
};

exports.logout = (req, res) => {
  req.logout();
};

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
    return;
  }
};
