var passport   = require('../config/passport')
  , express    = require('express')
  , router     = express.Router()
  , usersModel = require('../models/users')
  , bcrypt     = require('bcrypt-nodejs');

var isNotAuthenticated = function (req, res, next) {
    if (!req.user) {
        return next();
    }

    res.redirect('/');
}

router.get('/login', isNotAuthenticated, function (req, res) {
    //bcrypt.hash('test', null, null, function (err, hash) {
    //    usersModel.create({username: 'ut', password: hash});
    //});
    //usersModel.find({}, function (err, users) {
    //    res.end(JSON.stringify(users));
    //});
    res.render('gabrieljmj/users/auth/login', {message: req.flash('login-err')});
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash:    true
}));

module.exports = router;