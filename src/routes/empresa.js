const express = require('express');
const router = express.Router();
const empresaController = require('../controllers/empresaController');
const cache = require('./cache');

// Ruta para obtener la lista de empresas que trabajan en un aeropuerto específico
router.get('/operan_en/:id_aeropuerto', /*cache,*/ empresaController.getEmpresasAeropuertos);

// Ruta para obtener la lista de empresas que trabajan en un aeropuerto específico
router.get('/internacional/paises_no_opera/:rfc', /*cache,*/ empresaController.getPaisesNoPuedeOperar);
/*cache,*/

//Ruta para obtener las empresas que tiene más de 10 aviones y que trabajan en al menos dos aeropuertos diferentes
router.get('/diezoMasAviones/dosoMasAeropuertos', /*cache,*/ empresaController.getAvionesAeropuertos);

module.exports = router;