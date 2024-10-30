const neo4jDriver = require('../models/neo4jDatabase');

// Función para obtener la lista de empresas que trabajan en un aeropuerto específico
exports.getAutonomia = async (req, res) => {
    const minAutonomia = parseInt(req.params.minAutonomia);

    const query = `
        MATCH (n:Avion) 
        WHERE n.millas_autonomia > $minAutonomia 
        RETURN n
    `;
    const session = neo4jDriver.session();

    try {
        const result = await session.run(query, { minAutonomia });

        const aviones = result.records.map(record => record.get('n').properties);

        res.json({ Aviones: aviones });
    } catch (error) {
        console.error('Error al consultar aviones', error);
        res.status(500).json({ message: 'Error al consultar aviones', error });
    } finally {
        await session.close();
    }
};


