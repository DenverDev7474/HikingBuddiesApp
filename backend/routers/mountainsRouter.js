const mountain = require('../models/mountain');
const express = require('express');
const router = express.Router();
const mountainController = require('../controllers/mountainController.js');


// There's is no post for Moutains as they won't be 
// created from the front end.

router.get(`/mountains`, mountainController.getAllMountains);
router.get(`/mountains/:id`, mountainController.getMountainById);


module.exports = router;