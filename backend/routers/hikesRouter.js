const hike = require('../models/hike');
const express = require('express');
const router = express.Router();
const hikeController = require('../controllers/hikeController.js');


router.post(`/hikes`, hikeController.createHike);
router.get(`/hikes`, hikeController.getAllHikes);

router.get(`/hikes/:id`, hikeController.getHikeById);
router.patch(`/hikes/:id`, hikeController.updateHike);

router.delete(`/hikes/:id`, hikeController.deleteHike);


module.exports = router;