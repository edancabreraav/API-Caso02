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

// Función para obtener las empresas que tiene más de 10 aviones y que trabajan en al menos dos aeropuertos diferentes
exports.getAvionesAeropuertos = async (req, res) => {
    const query = `
        MATCH (n:Empresa)-[:OPERA]->(m:Aeropuerto)
        WHERE n.numero_aviones > 10
        WITH n, COUNT(DISTINCT m) AS numAeropuertos
        WHERE numAeropuertos >= 2
        RETURN n.nombre
    `;
    const session = neo4jDriver.session();

    try {
        const result = await session.run(query);
        const empresas = result.records.map(record => record._fields[0]);
        res.data = empresas;
        res.json({ 'Empresas': empresas });
    } catch (error) {
        console.error('Error al consultar empresas', error);
        res.status(500).json({ message: 'Error al consultar empresas', error });
    } finally {
        await session.close();
    }
};

//Función para eliminar una empresa que ya no trabaja en un aeropuerto específico y toda la información asociada
exports.deleteEmpresa = async (req, res) => {
    const query = `
        MATCH (e:Empresa)-[r:OPERA]->(a:Aeropuerto) 
        WHERE a.id_aeropuerto=$id_aeropuerto AND e.rfc=$rfc_empresa
        DELETE r
        RETURN e, a
    `;
    const session = neo4jDriver.session();
    const empresas = result.records.map(record => record._fields[0]);
    res.data = empresas;
    res.json({ 'Empresas': empresas });
    try {
    const result = await session(query, {id_aeropuerto, rfc_empresa})
        
    } catch (error) {
        console.error('Error al eliminar empresa', error);
        res.status(500).json({message: 'Error al eliminar empresa', error})
    } finally {
        await session.close()
    }
}