const neo4jDriver = require('../models/neo4jDatabase');

//----------GET-----------
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
        res.data = aeropuerto;
        res.json({ Aeropuertos: aeropuerto });
    } catch (error) {
        console.error('Error al consultar pistas', error);
        res.status(500).json({ message: 'Error al consultar pistas', error });
    } finally {
        await session.close();
    }
};

//----------PUT----------
//Función cambiar el numero de pistas de un aeropuerto
exports.putPistas= async (req, res) => {
    const id_aeropuerto = parseInt(req.params.id_aeropuerto);
    const pistas = req.body.pistas;

    const query = `
        MATCH (a:Aeropuerto {id_aeropuerto:$id_aeropuerto}) SET a.numero_de_pistas= $pistas RETURN a
    `;
    const session = neo4jDriver.session();

    try {
        const result = await session.run(query, { id_aeropuerto, pistas});
        const aeropuerto = result.records.map(record => record.get('a').properties);
        res.data = aeropuerto;
        res.json({ Aeropuertos: aeropuerto });
    } catch (error) {
        console.error('Error al actualizar número de pistas', error);
        res.status(500).json({ message: 'Error al actualizar número de pistas', error });
    } finally {
        await session.close();
    }
};