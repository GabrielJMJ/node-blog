var postsModel = require('../models/posts')
  , controller = {};

controller.index = function (req, res) {
    //postsModel.remove({}, function (err){});
    postsModel.find({}, function (err, allPosts) {
        if (!err) {
            res.render('gabrieljmj/posts/index', {posts: allPosts, user: req.user});
        }
    });
}

controller.post = function (req, res) {
    var postId = req.param('postId');
    postsModel
        .findOne({_id: postId})
        .populate('author')
        .exec(function (err, post) {
            if (!err) {
                post.content = post.content.replace(/\n?\r\n/g, '<br />' );
                res.render('gabrieljmj/posts/post', {post: post, user: req.user});
            }
        });
}

module.exports = controller;