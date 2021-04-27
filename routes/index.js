var express = require('express');
var router = express.Router();
var postsService = require('../services/postsService');

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Agape.Org' });
});
/* GET postagens page. */
router.get('/photo_posts', function (req, res, next) {
  var posts = postsService.getPosts();

  res.render('photo_posts', { title: 'Agape.org', posts: posts });
});


module.exports = router;
