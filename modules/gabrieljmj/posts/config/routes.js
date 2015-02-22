var express        = require('express')
  , router         = express.Router()
  , blogController = require('../controllers/posts');

router.get('/', blogController.index);
router.get('/post/:postId', blogController.post);

module.exports = router;