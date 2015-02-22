var express = require('express')
  , app     = express()
  , db      = require('./modules/gabrieljmj/posts/config/db')
  , routes  = require('./config/routes')
  , path    = require('path')
  , views   = path.join(__dirname, 'views');

routes.forEach(function (router) {
    app.use(router);
});

app.set('views', views);
app.set('view engine', 'jade');

module.exports = app;