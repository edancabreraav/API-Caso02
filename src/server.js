const express = require('express');
const app = express();
const conexionRedis = require('./models/redisDatabase');
const bodyParser = require('body-parser');
const PORT = 3000;


conexionRedis
    .on('error', (err) => console.log('Redis Client Error', err))
    .connect()
    .then(() => console.log("Conectado a Redis"));


const rutaPruebaMateria = require('./routes/rutasmaterias');

//middlewares
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use('/api', rutaPruebaMateria);
app.listen(PORT, () => { console.log('Server en http://localhost:' + PORT) });