var postsModel = require('../models/posts')
  , controller = {};

controller.index = function (req, res) {
    postsModel.find({}, function (err, allPosts) {
        if (!err) {
            res.render('gabrieljmj/posts/index', {posts: allPosts, user: req.user});
        }
    });
}

controller.post = function (req, res) {
    var postId = req.param('postId');
    postsModel.findOne({_id: postId}, function (err, post) {
        if (!err) {
            res.render('gabrieljmj/posts/post', {post: post});
        }
    });
}

module.exports = controller;