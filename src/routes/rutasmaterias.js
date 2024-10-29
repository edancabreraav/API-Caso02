const express = require('express');
const router = express.Router();
const materiaController = require('../controllers/materiaController');
const cache = require('./cache');

// Ruta para crear una materia
router.post('/materia', cache, materiaController.createMateria);

// Ruta para obtener todos los alumnos inscritos en una materia específica
router.get('/materia/:clave', cache, materiaController.getAlumnosByMateria);

module.exports = router;

