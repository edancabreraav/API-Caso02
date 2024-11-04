const express = require('express');
const router = express.Router();
const aeropuertoController = require('../controllers/aeropuertoController');
const cache = require('./cache');

// Ruta para obtener la lista de aeropuertos con más de 3 pistas
router.get('/pistas/:minPistas', /*cache,*/ aeropuertoController.getAeropuertosPistas);

//Ruta para cambiar el número de pistas de un aeropuerto
router.put('/actualizarPistas/:id_aeropuerto', aeropuertoController.putPistas)

module.exports = router;