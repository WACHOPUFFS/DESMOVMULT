var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Is Hatsune Miku' });
});

/* GET nosotros page. */
router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'Nosotros' });
});

module.exports = router;
