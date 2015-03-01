var usersModel = require('../models/users')
  , controller = {};

controller.user = function (req, res) {
    var userId = req.param('userId');

    usersModel.findOne({_id: userId}, function (err, user) {
        if (err) {
            console.log(err);
        }

        if (!user) {
            res.render('gabrieljmj/users/user-not-found');
        }

        res.render('gabrieljmj/users/user', {user: user});
    });
}

module.exports = controller;