const mongoose = require("mongoose");
const mountain = mongoose.model("Mountain");
const promisify = require("es6-promisify");

exports.getAllMountains = (req, res) => {
  mountain
    .find()
    .then((mountains) => {
      res.status(200).json(mountains);
    })
    .catch((err) => {
      res.status(404).json({
        message: "Error getting mountains",
        error: err,
      });
    });
};

exports.getMountainById = (req, res) => {
  mountain
    .findById(req.params.id)
    .then((mountain) => {
      res.status(200).json(mountain);
    })
    .catch((err) => {
      res.status(404).json({
        message: "Error getting mountain",
        error: err,
      });
    });
};
