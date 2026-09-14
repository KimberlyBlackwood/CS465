const express = require('express');
const router = express.Router();
const ctrlMeals = require('../controllers/meals');

router.get('/meals', ctrlMeals.meals);

module.exports = router;

