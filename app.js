var express = require('express')
  , app     = express()
  , db      = require('./modules/gabrieljmj/posts/config/db')
  , routes  = require('./config/routes');

routes.forEach(function (router) {
    app.use(router);
});

module.exports = app;