const passportAuth = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("User");

exports.login = (req, res, next) => {
  const credentials = {
    username: req.body.username,
    password: req.body.password,
  };

  passportAuth.authenticate('local', (error, credentials) => {
    console.log('login user test', credentials)

    if (error) {
      console.log('login error', error)
      return res.status(500).json({ error: error });
    }
    if (!credentials) {
      return res.status(401).json({ error: 'Login failed' });
    }
    req.logIn(credentials, error => {
      if (error) {
        console.log('login error', error)
        return res.status(500).json({ error: error });
      }
      return res.json({ user: credentials });
    });
  })(req, res, next);
};

exports.logout = (req, res) => {
  req.logout();
  res.status(200).json({ message: "Logout successful" });
};


exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({ error: "You must be logged in to access this resource." });
  }
};
