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


// router.get('/account', authController.isLoggedIn, userController.getAccount);

// router.post('/account', catchErrors(userController.updateAccount));

// router.post('/account/forgot', catchErrors(authController.forgot));

// router.get('/account/reset/:token', catchErrors(authController.reset));

// router.post('/account/reset/:token', authController.confirmedPasswords, 
//  catchErrors(authController.update));


module.exports = router;