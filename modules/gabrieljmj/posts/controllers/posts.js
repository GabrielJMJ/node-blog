var PostsModel = require('../models/posts')
  , controller = {};

controller.index = function (req, res) {
    PostsModel.find({}, function (err, allPosts) {
        msg = 'Posts: ' + JSON.stringify(allPosts);
        res.end(msg);
    });
}

controller.post = function (req, res) {
    var postId = req.param('postId');
}

controller.create = function (req, res) {

}

module.exports = controller;