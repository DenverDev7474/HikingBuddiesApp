const passportAuth = require('passport');
// const crypto = require('crypto');
const mongoose = require('mongoose');
const User = mongoose.model('User');
// const promisify = require('es6-promisify');
// const mail = require('../handlers/mail');

// exports.login = passportAuth.authenticate('local');


exports.login = (req, res) => {
    // console.log('the request body', req.body);
    // const errors = req.validationErrors();

    console.log('the request body', req.body);

    const passlogin = passportAuth.authenticate('local', (error, user) => {
        const login = req.logIn(user, (error) => {
            if (error) {
                return res.status(500).json({ error: error });
            }
            return res.json({ user: user });
        });
        console.log('login', login);
        return login;
    });
    
    console.log("passlogin", passlogin);

    res.json(passlogin)

    next();
}





exports.logout = (req, res) => {
    req.logout();
}

exports.isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()) {
        next();
        return;
    }
    // req.flash('error', 'Oops you must be logged in to do that!');
    // res.redirect('/login');
}

// exports.forgot = async (req, res) => {
//     const user = await User.findOne({email: req.body.email});
//     if(!user) {
//         // a password reset token is created and sent to the user's email
//         req.flash('error', 'No account with that email exists.');
//         res.redirect('/login');
//     }
//     user.resetPasswordToken = crypto.randomBytes(20).toString('hex');
//     user.resetPasswordExpires = Date.now() + 3600000; // 1 hour from now
//     await user.save();
//     const resetURL = `http://${req.headers.host}/account/reset/${user.resetPasswordToken}`;
//     await mail.send({
//         user: user,
//         subject: 'Password reset',
//         resetURL: resetURL,
//         filename: 'password-reset'
//     });
//     req.flash('success', `You have been emailed a password reset link.`);
//     res.redirect('/login');
// }


// exports.reset = async (req, res) => {
//     const user = await User.findOne({
//         resetPasswordToken: req.params.token,
//         resetPasswordExpires: {$gt: Date.now()}
//     });
//     console.log(user);
//     if(!user) {
//         req.flash('error', 'Password reset is invalid or has expired.');
//         return res.redirect('/login');
//     }
//     res.render('reset', {title: 'Reset your password'});
// }

// exports.confirmedPasswords = (req, res, next) => {  
//     // when property has a - dash in it you can use it as a key with a bracket notation
//     if(req.body.password === req.body['password-confirm']) {
//         next();
//         return;
//     }
//     req.flash('error', 'Passwords do not match!');
//     res.redirect('back');
// }

// exports.update = async (req, res) => {
//     const user = await User.findOne({
//         resetPasswordToken: req.params.token,
//         resetPasswordExpires: {$gt: Date.now()}
//     });
//     if(!user) {
//         req.flash('error', 'Password reset is invalid or has expired.');
//         return res.redirect('/login');
//     }
//     const setPassword = promisify(user.setPassword, user);
//     await setPassword(req.body.password);
//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpires = undefined;
//     const updatedUser = await user.save();
//     await req.login(updatedUser);
//     req.flash('success', 'Nice! Your password has been reset!');
//     res.redirect('/');
// }