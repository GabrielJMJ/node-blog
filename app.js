var app          = require('express')()
  , db           = require('./config/db')
  , routes       = require('./config/routes')
  , path         = require('path')
  , views        = path.join(__dirname, 'views')
  , bodyParser   = require('body-parser')
  , passport     = require('./config/passport')
  , flash        = require('connect-flash')
  , cookieParser = require('cookie-parser')
  , session      = require('express-session');

/* Views */
app.set('views', views);
app.set('view engine', 'jade');
app.locals.pretty = true;

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(session({
    cookie: {maxAge: 60000},
    secret: '6h5gf654hgf6g5j5gh4j5ht6yj3yt2gjh54j9'
}));
app.use(flash());

/* Passport - auth */
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
routes.forEach(function (router) {
    app.use(router);
});

module.exports = app;