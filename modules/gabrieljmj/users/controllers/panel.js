var postsModel = require('../../posts/models/posts')
  , controller = {};

controller.create = function (req, res) {
    res.render('gabrieljmj/users/panel/create');
}

controller.createAction = function (req, res) {
    var post = new postsModel({
        title:   req.body.title
      , content: req.body.content
      , author:  req.user._id
    });

    post.save(function (err) {
        var message = err ? 'Error on save post: ' + err : 'Successfully created';

        res.render('gabrieljmj/users/panel/create', {message: message, user: req.user});
    });
}

module.exports = controller;