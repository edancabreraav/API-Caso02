const client = require('../models/redisDatabase');

const cache = async function (req, res, next) {
   let fecha = new Date();
   await client.set(
      fecha.toLocaleDateString() + ":" 
      + fecha.getHours() + "-" 
      + fecha.getMinutes() + "-" 
      + fecha.getSeconds(), " - " 
      + req.method + " " 
      + req.route.path);
   next()
}


module.exports = cache;