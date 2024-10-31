const express = require('express');
const router = express.Router();
const personalController = require('../controllers/personalController');
const cache = require('./cache');

// Ruta para obtener la lista de aeropuertos con más de 3 pistas
router.get('/piloto/ruta/:codigo', /*cache,*/ personalController.getRutaAsignada);

// Ruta que crea un nuevo personal de apoyo y lo asigna a una empresa
router.post('/nuevo/apoyo', personalController.postApoyo)

module.exports = router;