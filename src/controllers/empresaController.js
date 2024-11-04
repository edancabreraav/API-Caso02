const neo4jDriver = require('../models/neo4jDatabase');

//----------GET----------
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

//----------DELETE----------
//Función que elimina una empresa que ya no trabaja en un aeropuerto específico y elimina también la información asociada
exports.deleteEmpresaFromAeropuerto = async (req, res) => {
    const {id_aeropuerto, rfc_empresa} = req.body;

    const query = `
        MATCH (e:Empresa)-[r:OPERA]->(a:Aeropuerto) WHERE a.id_aeropuerto=$id_aeropuerto AND e.rfc=$rfc_empresa
        DELETE r
        RETURN e.nombre AS empresaNombre, a.nombre AS aeropuertoNombre
    `;
    const session = neo4jDriver.session();

    try {
        const result = await session.run(query, {id_aeropuerto, rfc_empresa});

        const { empresaNombre, aeropuertoNombre } = result.records[0].toObject();
        res.data = { empresaNombre, aeropuertoNombre };
        res.json({ message: `${empresaNombre} eliminado de ${aeropuertoNombre}` });
    } catch (error) {
        console.error('Error al eliminar Empresa de Aeropuerto', error);
        res.status(500).json({ message: 'Error al eliminar Empresa de Aeropuerto', error });
    } finally {
        await session.close();
    }

}

//Función que da de baja a todos los pilotos de una empresa
exports.deletePilotos = async (req, res) => {
    const rfc_empresa = req.params.rfc_empresa;

    const query = `
        MATCH (e:Empresa)<-[r:PILOTO]-(p:Personal)
        WHERE e.rfc = $rfc_empresa
        DELETE r
        RETURN p.nombre1
    `;
    const session = neo4jDriver.session();

    try {
        const result = await session.run(query, { rfc_empresa });
        const pilotos = result.records.map(record => record._fields[0]);
        res.data = pilotos;
        res.json({ "Pilotos dados de baja": pilotos });
    } catch (error) {
        console.error('Error al eliminar los pilotos', error);
        res.status(500).json({ message: 'Error al eliminar los pilotos', error });
    } finally {
        await session.close();
    }
};