var PostsModel = require('../models/posts')
  , controller = {};

controller.index = function (req, res) {
    PostsModel.find({}, function (err, allPosts) {
        if (!err) {
            res.render('gabrieljmj/posts/index', {posts: allPosts});
        }
    });
}

controller.post = function (req, res) {
    var postId = req.param('postId');
    PostsModel.findOne({_id: postId}, function (err, post) {
        if (!err) {
            res.render('gabrieljmj/posts/post', {post: post});
        }
    });
}

module.exports = controller;