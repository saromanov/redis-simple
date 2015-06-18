var redis = require('redis');
var client = redis.createClient();

module.exports = function(){
    return {
        set: function(key, value, hash){
            if(hash !== undefined){
                client.hset(hash, key, value, redis.print);
            }
            else {
                client.set(key, value, redis.print);
            }
        },

        get: function(key, hash, cb) {
            if(typeof hash === 'function'){
                cb = hash;
                hash = undefined;
            }
            if(hash !== undefined){
                client.hget(hash, key, function(err, reply){
                    cb(err, reply);
                });
            } else {
                client.get(key, function(err, reply){
                    cb(err, reply);
                });
            }
        },

        quit: function(){
            client.quit();
        }
    };
};
