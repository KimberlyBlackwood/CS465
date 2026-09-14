const express = require('express');
const router = express.Router();
const ctrlRooms = require('../controllers/rooms');

router.get('/rooms', ctrlRooms.rooms);

module.exports = router;
