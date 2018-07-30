var express = require('express');
var router = express.Router();
const models = require('../models');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
})

/* 获取所有文章 */
router.get('/get-articles', (req, res) => {
  models.Article.findAll().then(articles => {
    res.json({ results: articles })
  })
})

/* 新增一篇文章 */
router.post('/add-articles', (req, res) => {
  models.Article.create(req.body).then(article => {
    res.json({ status: 0 })
  })
})

/* 指定删除一篇文章 */
router.post('/remove-articles', (req, res) => {
  models.Article
    .findById(req.body.id)
    .then(article => {
      if (!article) return res.json({ ret: 400, results: 'Article Not Found.' })
      article
        .destroy()
        .then(() => res.json({ ret: 0, results: 'success' }))
        .catch(err => res.json({ ret: 400, results: 'error1' }))
    })
    .catch(err => {
      res.json({ ret: 400, results: 'error2' })
    })
})

module.exports = router
