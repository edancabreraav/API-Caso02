const neo4jDriver = require('../models/neo4jDatabase');

//Función obtener la lista de aeropuertos con más de 3 pistas
exports.getAeropuertosPistas = async (req, res) => {
    const minPistas = parseInt(req.params.minPistas);

    const query = `
        MATCH (n:Aeropuerto) WHERE n.numero_de_pistas > $minPistas RETURN n.nombre
    `;
    const session = neo4jDriver.session();

    try {
        const result = await session.run(query, { minPistas });
        const aeropuerto = result.records.map(record => record._fields[0]);
        res.json({ Aeropuertos: aeropuerto });
    } catch (error) {
        console.error('Error al consultar pistas', error);
        res.status(500).json({ message: 'Error al consultar pistas', error });
    } finally {
        await session.close();
    }
};