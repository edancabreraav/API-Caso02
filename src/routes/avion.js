const express = require('express');
const router = express.Router();
const avionController = require('../controllers/avionController');
const cache = require('./cache');

// Ruta para obtener la lista de aviones con una autonomía de vuelo mayor a 5000 millas
router.get('/autonomia/:minAutonomia', /*cache,*/ avionController.getAutonomia);

//Ruta para crear un nuevo avión y asignarlo a una empresa
router.post('/nuevo', avionController.postAvion);

module.exports = router;