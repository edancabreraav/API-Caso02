const redis = require('redis');
const redisClient = redis.createClient({
    socket:{
        port:6379,
        host:'172.17.0.3'
    }
 });

 module.exports = redisClient