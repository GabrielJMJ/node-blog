var postsRoutes = require('../modules/gabrieljmj/posts/config/routes')
  , authRoutes  = require('../modules/gabrieljmj/users/config/auth-routes')
  , usersRoutes = require('../modules/gabrieljmj/users/config/user-routes')
  , panelRoutes = require('../modules/gabrieljmj/users/config/panel-routes');

module.exports = [
    postsRoutes
  , authRoutes
  , usersRoutes
  , panelRoutes
];