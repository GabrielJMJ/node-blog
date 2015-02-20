var express        = require('express')
  , router         = express.Router()
  , blogController = require('../controllers/posts');

router.get('/', function (req, res) {
    blogController.index(req, res);
});

router.get('/post/:postId', function (req, res) {
    blogController.post(req, res);
});

router.post('/create', function (req, res) {
    
});

module.exports = router;