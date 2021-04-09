var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Agape.Org' });
});

router.get('/sobre', function(req, res, next){
  res.render('sobre', {title: 'Sobre'});
});

module.exports = router;
