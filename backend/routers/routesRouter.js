const route = require('../models/route');
const express = require('express');
const router = express.Router();
const routeController = require('../controllers/routeController.js');


// There's is no post for Routes as they won't be 
// created from the front end.

router.get(`/routes`, routeController.getAllRoutes);
router.get(`/routes/:id`, routeController.getRouteById);
router.get(`/routes/mountain/:id`, routeController.getAllRoutesByMountainId);    



module.exports = router;