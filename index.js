var redis = require('redis');
var client = redis.createClient();

module.exports = function() {
    return {
        set: function(key, value, hash, cb) {
            if (typeof hash === 'function') {
                cb = hash;
                hash = undefined;
            }
            if (hash !== undefined) {
                client.hset(hash, key, value, function(err, reply) {
                    cb(err, reply);
                });
            } else {
                client.set(key, value, function(err, reply) {
                    cb(err, reply);
                });
            }
        },

        get: function(key, hash, cb) {
            if (typeof hash === 'function') {
                cb = hash;
                hash = undefined;
            }
            if (hash !== undefined) {
                client.hget(hash, key, function(err, reply) {
                    cb(err, reply);
                });
            } else {
                client.get(key, function(err, reply) {
                    cb(err, reply);
                });
            }
        },

        del: function(key, field, cb) {
            if (typeof field === 'function') {
                cb = field;
                field = undefined;
            }

            if (field !== undefined) {
                client.hdel(field, key, function(err, reply) {
                    cb(err, reply);
                });
            } else {
                client.del(key, function(err, reply) {
                    cb(err, reply);
                });
            }
        },

        quit: function() {
            client.quit();
        }
    };
};