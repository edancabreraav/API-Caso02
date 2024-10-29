const neo4jDriver = require('../models/neo4jDatabase');

//Función para crear una materia
exports.createMateria = async (req, res) => {
    const { nombre, clave, grupo, aula, horario } = req.body;

    const query = `
        CREATE (n:Materia {nombre: $nombre, clave: $clave, grupo: $grupo, aula: $aula, horario: $horario})
        RETURN n
    `;
    const session = neo4jDriver.session();

    try {
        const result = await session.run(query, { nombre, clave, grupo, aula, horario });
        const materia = result.records.map(record => record.get('n').properties);
        res.json({ Materia: materia });
    } catch (error) {
        console.error('Error al crear la materia:', error);
        res.status(500).json({ message: 'Error al crear la materia', error });
    } finally {
        await session.close();
    }
};

// FUnción para obtener todos los alumnos en una materia
exports.getAlumnosByMateria = async (req, res) => {
    const { clave } = req.params;

    const query = `
        MATCH (a:Alumno)-[:INSCRITO_EN]->(m:Materia {clave: $clave})
        RETURN a
    `;
    const session = neo4jDriver.session();

    try {
        const result = await session.run(query, { clave });
        const alumnos = result.records.map(record => record.get('a').properties);
        res.json({ Alumnos: alumnos });
    } catch (error) {
        console.error('Error al obtener alumnos de la materia:', error);
        res.status(500).json({ message: 'Error al obtener alumnos', error });
    } finally {
        await session.close();
    }
};
