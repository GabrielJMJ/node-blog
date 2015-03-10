var router          = require('express').Router()
  , panelController = require('../controllers/panel');



//INDEX
router.get('/panel', panelController.index);

//CREATE
router.get('/authors/panel/create', panelController.create);
router.post('/authors/panel/create', panelController.createAction);

//DELETE
router.post('/authors/panel/post/delete/:postId', panelController.deleteAction);

//EDIT
router.get('/authors/panel/post/edit/:postId', panelController.edit);
router.post('/authors/panel/post/edit/:postId', panelController.editAction);

module.exports = router;