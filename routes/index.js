var express = require('express');
var router = express.Router();
const models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test-api', (req, res, next) => {
	res.json({ title: '0910' });
});

module.exports = router;
