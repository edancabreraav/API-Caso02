const express = require('express');
const router = express.Router();
const empresaController = require('../controllers/empresaController');
const cache = require('./cache');

// Ruta para obtener la lista de empresas que trabajan en un aeropuerto específico
router.get('/operan_en/:id_aeropuerto', cache, empresaController.getEmpresasAeropuertos);

// Ruta para obtener la lista de empresas que trabajan en un aeropuerto específico
router.get('/internacional/paises_no_opera/:rfc', cache, empresaController.getPaisesNoPuedeOperar);

module.exports = router;