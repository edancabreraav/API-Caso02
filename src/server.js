const express = require('express');
const app = express();
const conexionRedis = require('./models/redisDatabase');
const bodyParser = require('body-parser');
const PORT = 3000;


conexionRedis
    .on('error', (err) => console.log('Redis Client Error', err))
    .connect()
    .then(() => console.log("Conectado a Redis"));

const rutasAeropuerto = require('./routes/aeropuerto');
const rutasEmpresas = require('./routes/empresa')
const rutasAvion = require('./routes/avion')
const rutasPersonal = require('./routes/personal')

const logger = require('./routes/logger');

//middlewares
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use(logger);

app.use('/aeropuerto', rutasAeropuerto)
app.use('/empresa', rutasEmpresas)
app.use('/avion', rutasAvion)
app.use('/personal', rutasPersonal)
app.listen(PORT, () => { console.log('Server en http://localhost:' + PORT) });