const neo4jDriver = require('../models/neo4jDatabase');


//----------GET-----------
//Función para obtener la lista de aviones con una autonomía de vuelo mayor a 5000 millas
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
        res.data = aviones;
        res.json({ Aviones: aviones });
    } catch (error) {
        console.error('Error al consultar aviones', error);
        res.status(500).json({ message: 'Error al consultar aviones', error });
    } finally {
        await session.close();
    }
};

//----------POST-----------
//Función que crea un nuevo avión y lo asigna a una empresa
exports. postAvion= async (req, res) => {
    const {id_avion, 
           modelo, 
           millas_autonomia, 
           numero_pasajeros,
           numero_integrantes_tripulacion,
           ultima_revision,
           rfc_empresa} = req.body;

    const query = `
        CREATE 
	    (a:Avion {
            id_avion:$id_avion,
            modelo:$modelo,
            millas_autonomia:$millas_autonomia,
            numero_pasajeros:$numero_pasajeros,
            numero_integrantes_tripulacion:$numero_integrantes_tripulacion, 
            utlima_revision:date($ultima_revision)})
        WITH a
        MATCH (e: Empresa {rfc:$rfc_empresa})
        CREATE (e)-[:PROPIEDAD]->(a)
        RETURN a
    `;
    const session = neo4jDriver.session();

    try {
        const result = await session.run(query, {id_avion, modelo, millas_autonomia, numero_pasajeros, numero_integrantes_tripulacion, ultima_revision, rfc_empresa});

        const avion = result.records.map(record => record.get('a').properties);
        res.data = avion;
        res.json({ NuevoAvion: avion });
    } catch (error) {
        console.error('Error al crear avion', error);
        res.status(500).json({ message: 'Error al crear avion', error });
    } finally {
        await session.close();
    }
};