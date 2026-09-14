const express = require('express');
const router = express.Router();
const ctrlAbout = require('../controllers/about');

router.get('/about', ctrlAbout.about);

module.exports = router;



