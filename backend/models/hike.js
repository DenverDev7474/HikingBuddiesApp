const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hikeSchema = mongoose.Schema({
  mountainId: {
    type: mongoose.Types.ObjectId,
    ref: "Mountain",
    required: true,
  },
  eventTime: {
    type: Date,
    required: true,
  },
  routeId: {
    type: mongoose.Types.ObjectId,
    ref: "Route",
    required: true,
  },
  hostId: {
    type: String,
    required: true,
  },
  attendeesIds: [
    {
      type: Number,
    },
  ],
  spotsAvailable: {
    type: Number,
    required: true,
    min: 1,
    max: 4,
  },
  aboutDetails: {
    type: String,
    required: false,
  },
  gasSplit: {
    type: String,
    required: false,
  },
  hikePace: {
    type: String,
    required: true,
  },
  weatherPrediction: {
    type: String,
    required: false,
  },
  weatherPredictionPercentage: {
    type: Number,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("hike", hikeSchema);
