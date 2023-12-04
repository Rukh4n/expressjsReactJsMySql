const express = require('express');
const articleControlers = require('../controlers/articleControler');

const router = express.Router();

router.get('/articles', articleControlers.getArticles);
router.get('/articles/:id', articleControlers.getArticlesById);
router.post('/articles', articleControlers.createArticles);
router.patch('/articles/:id', articleControlers.editArticle);
router.delete('/articles/:id', articleControlers.deletArticle);

module.exports = router;