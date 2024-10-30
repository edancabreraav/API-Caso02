const neo4jDriver = require('../models/neo4jDatabase');

// Función para obtener la lista de empresas que trabajan en un aeropuerto específico
exports.getEmpresasAeropuertos = async (req, res) => {
    const idAeropuerto = parseInt(req.params.id_aeropuerto);

    const query = `
        MATCH (n:Empresa)-[r:OPERA]->(m:Aeropuerto) 
        WHERE m.id_aeropuerto = $idAeropuerto 
        RETURN n.nombre
    `;
    const session = neo4jDriver.session();

    try {
        const result = await session.run(query, { idAeropuerto });
        const empresas = result.records.map(record => record._fields[0]);
        res.data = empresas;
        res.json({ Empresas: empresas });
    } catch (error) {
        console.error('Error al consultar empresas', error);
        res.status(500).json({ message: 'Error al consultar empresas', error });
    } finally {
        await session.close();
    }
};

// Función para obtener la lista de paises en los que una empresa internacional no puede operar
exports.getPaisesNoPuedeOperar = async (req, res) => {
    const rfc = req.params.rfc;

    const query = `
        MATCH (n:Internacional) 
        WHERE n.rfc= $rfc 
        return n.paises_no_puede_operar
    `;
    const session = neo4jDriver.session();

    try {
        const result = await session.run(query, { rfc });
        const paises = result.records.map(record => record._fields[0]);
        res.data = paises;
        res.json({ 'Países donde no puede operar': paises });
    } catch (error) {
        console.error('Error al consultar empresas', error);
        res.status(500).json({ message: 'Error al consultar empresas', error });
    } finally {
        await session.close();
    }
};