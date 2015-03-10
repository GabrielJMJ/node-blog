var postsModel = require('../../posts/models/posts')
  , controller = {};

//INDEX
controller.index = function (req, res) {
    postsModel.find({}, function (err, posts) {
        if (err) {
            console.log(err);
            throw(err);
        }

        res.render('gabrieljmj/panel/index', {posts: posts});
    });
}

//CREATE
controller.create = function (req, res) {
    res.render('gabrieljmj/panel/create');
}

controller.createAction = function (req, res) {
    var post = new postsModel({
        title:   req.body.title
      , content: req.body.content
      , author:  req.user._id
    });

    post.save(function (err) {
        var message = err ? 'Error on save post: ' + err : 'Successfully created';

        res.render('gabrieljmj/panel/create', {message: message, user: req.user});
    });
}

//DELETE
controller.deleteAction = function (req, res) {
}

//EDIT
controller.edit = function (req, res) {
    var postId = req.param('postId');

    postsModel.findOne({_id: postId}, function (err, post) {
        if (err) {
            console.log(err);
            throw(err);
        }

        if (!post) {
            res.remder('gabrieljmj/panel/edit', {post_not_found: true});
        }

        res.render('gabrieljmj/panel/edit', {post: post});
    });
}

controller.editAction = function (req, res) {
    var postId = req.param('postId');

    var updated = {$set: {
        title:   req.body.title
      , content: req.body.content
    }};

    postsModel.update({_id: postId}, updated, {upsert: true}, function (err) {
        res.redirect('/post/' + postId);
    });
}

module.exports = controller;