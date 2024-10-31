const neo4jDriver = require('../models/neo4jDatabase');

//----------GET----------
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

//----------POST----------
//Función que crea un nuevo personal de apoyo y lo asigna a una empresa Nacional
exports. postApoyo= async (req, res) => {
    const {id_personal,
           nacionalidad, 
           pais_residencia, 
           nombre1, nombre2, 
           direccion, 
           lengua_materna,
           empresa_rfc, 
           idiomas_habla,
           telefono} = req.body;

    const query = `
        CREATE (p:Personal {
                    id_personal:$id_personal,
                    nacionalidad:$nacionalidad,
                    pais_residencia:$pais_residencia, 
                    nombre1:$nombre1, 
                    nombre2:$nombre2, 
                    direccion:$direccion,
                    lengua_materna: $lengua_materna})
        WITH p
        MATCH (e: Nacional ) WHERE e.rfc=$empresa_rfc
        CREATE (e)<-[:APOYO {idiomas_habla:$idiomas_habla, numero_telefono:$telefono}]-(p)
        RETURN p
    `;
    const session = neo4jDriver.session();

    try {
        const result = await session.run(query, {id_personal, nacionalidad, pais_residencia, nombre1, nombre2, direccion, lengua_materna,
            empresa_rfc, idiomas_habla, telefono});

        const apoyo = result.records.map(record => record.get('p').properties);
        res.data = apoyo;
        res.json({ NuevoApoyo: apoyo });
    } catch (error) {
        console.error('Error al crear personal de apoyo', error);
        res.status(500).json({ message: 'Error al crear personal de apoyo', error });
    } finally {
        await session.close();
    }
};