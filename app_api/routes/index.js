const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');
const { auth } = require('../middleware/auth');

router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/trips', tripsController.tripsList);

router.route('/trips/:tripCode')
  .get(tripsController.tripsFindByCode)
  .put(auth, tripsController.tripsUpdateTrip)
  .delete(auth, tripsController.tripsDeleteTrip);

module.exports = router;
