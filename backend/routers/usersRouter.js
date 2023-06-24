const user = require('../models/user');
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const authController = require('../controllers/authController.js');

router.post('/login', authController.login);

router.get('/user/:id', userController.getUserById);

router.post('/register', 
    userController.validateRegister, 
    userController.register, 
);  

router.get('/logout', authController.logout);

module.exports = router;

