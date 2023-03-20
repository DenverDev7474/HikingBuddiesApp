const mongoose = require('mongoose');
const User = mongoose.model('User');
const { collection } = require('../models/user');
const {promisify} = require("es6-promisify");


// exports.createUser = (req, res) => {
//     const newUser = new user(req.body);
//     newUser.save()
//         .then((newUser) => {
//             res.status(201).json(newUser);
//         })
//         .catch(err => {
//             res.status(404).json({
//                 message: 'Error creating new user',
//                 error: err,
//                 body: newUser
//             });
//         });
// }

exports.getUserById = (req, res) => {
    user.findById(req.params.id)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(404).json({
                message: 'Error getting user',
                error: err
            });
        });
}



exports.validateRegister = (req, res, next) => {
    // console.log('the request body',req.body);
    req.sanitizeBody('username');
    req.sanitizeBody('firstName');
    req.sanitizeBody('lastName');
    req.sanitizeBody('city');

    req.checkBody('username', 'You must supply a username!').notEmpty();
    req.checkBody('firstName', 'You must supply a First Name!').notEmpty();
    req.checkBody('lastName', 'You must supply a Last Name!').notEmpty();
    req.checkBody('city', 'You must supply a city!').notEmpty();

    req.checkBody('confirmEmail', 'Oops! Your Emails do not match').equals(req.body.email);



    req.checkBody('email', 'That Email is not valid!').isEmail();
    // add more checks here
    req.sanitizeBody('email').normalizeEmail({
        remove_dots: false,
        remove_extension: false,
        gmail_remove_subaddress: false
    });
    req.checkBody('password', 'Password cannot be blank!').notEmpty();
    req.checkBody('confirmPassword', 'Confirmed Password cannot be blank!').notEmpty();
    req.checkBody('confirmPassword', 'Oops! Your passwords do not match').equals(req.body.password);

    const errors = req.validationErrors();
    if(errors) {
        console.log(errors);
        //req.flash('error', errors.map(err => err.msg));
        //res.render('register', { title: 'Register', body: req.body, flashes: req.flash() });
        return; // stop the fn from running
    }
    next(); // there were no errors!
}


// exports.validateLogin = (req, res, next) => {
//     req.checkBody('email', 'That Email is not valid!').isEmail();
//     req.sanitizeBody('email').normalizeEmail({
//         remove_dots: false,
//         remove_extension: false,
//         gmail_remove_subaddress: false
//     });
//     req.checkBody('password', 'Password cannot be blank!').notEmpty();
//     const errors = req.validationErrors();
//     if(errors) {
//         req.flash('error', errors.map(err => err.msg));
//         res.render('login', { title: 'Log in', body: req.body, flashes: req.flash() });
//         return; // stop the fn from running
//     }
//     next()
// }



exports.register = async (req, res, next) => {
    console.log("registering user");
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        city: req.body.city,
        profilePicUrl: '',
        password: req.body.password
    });
    console.log(user);

    await User.register(user, req.body.password, (err, user) => {
        if(err) {
            //console.log(err);
            return res.status(500).json({
                message: err.message
            });
        }
        console.log("user registered");
    });
}

