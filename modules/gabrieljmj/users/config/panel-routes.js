var router          = require('express').Router()
  , panelController = require('../controllers/panel')
  , util            = require('util');

router.use(function (req, res, next) {
    if (!req.user) {
        res.send('what???', 404);
    }

    next();
});

router.get('/authors/panel/create', panelController.create);
router.post('/authors/panel/create', panelController.createAction);

module.exports = router;