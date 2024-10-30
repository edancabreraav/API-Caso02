const express = require('express');
const router = express.Router();
const avionController = require('../controllers/avionController');
const cache = require('./cache');

// Ruta para obtener la lista de aeropuertos con más de 3 pistas
router.get('/autonomia/:minAutonomia', cache, avionController.getAutonomia);

module.exports = router;