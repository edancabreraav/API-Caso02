const express = require('express');
const router = express.Router();
const personalController = require('../controllers/personalController');
const cache = require('./cache');

// Ruta para obtener la lista de aeropuertos con más de 3 pistas
router.get('/piloto/ruta/:codigo', /*cache,*/ personalController.getRutaAsignada);

module.exports = router;