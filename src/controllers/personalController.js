const neo4jDriver = require('../models/neo4jDatabase');

// Función para obtener la lista de pilotos que tienen licencia para volar una ruta específica
exports.getRutaAsignada = async (req, res) => {
    const codigo = req.params.codigo;

    const query = `
        MATCH(n:Personal)-[:ASIGNADA_PILOTO]->(m:Ruta) 
        WHERE m.codigo =  $codigo 
        RETURN n.nombre1, n.nombre2
    `;
    const session = neo4jDriver.session();

    try {
        const result = await session.run(query, { codigo });

        const pilotos = result.records.map(record => record._fields[0]+" "+record._fields[1]);
        res.data = pilotos;
        res.json({ Pilotos: pilotos });
    } catch (error) {
        console.error('Error al consultar pilotos', error);
        res.status(500).json({ message: 'Error al consultar pilotos', error });
    } finally {
        await session.close();
    }
};