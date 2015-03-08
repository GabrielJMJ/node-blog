var router          = require('express').Router()
  , usersController = require('../controllers/users');

router.get('/authors/:userId', usersController.user);

module.exports = router;