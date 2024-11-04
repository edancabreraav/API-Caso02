const neo4j = require("neo4j-driver");
const neo4jDriver = neo4j.driver(
    'neo4j://172.19.0.2',
    neo4j.auth.basic('neo4j', 'neo4j')
 );

 module.exports = neo4jDriver