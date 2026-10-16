const express = require('express');
const router = express.Router();
const ctrlNews = require('../controllers/news');

router.get('/news', ctrlNews.news);

module.exports = router;

