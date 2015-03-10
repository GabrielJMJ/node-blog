var usersModel = require('../models/users')
  , postsModel = require('../../posts/models/posts')
  , controller = {};

controller.user = function (req, res) {
    var userId = req.param('userId');

    usersModel.findOne({username: userId}, function (err, user) {
        if (err) {
            console.log(err);
        }

        if (!user.active) {
            res.render('gabrieljmj/users/user-not-found');
        }

        postsModel.find({author: user._id}, function (err, posts) {
            res.render('gabrieljmj/users/user', {pr_user: user, posts: posts});
        });
    });
}

module.exports = controller;