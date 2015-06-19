# redis-simple
Very simple client for redis. Based on [node_redis](https://github.com/mranney/node_redis)
This client, contains only three commands: ```set```, ```get``` and ```del``` for strings and hashes.

## Install

## Usage

Example with strings
```javascript
var redissimple = require('redis-simple');
var key = "A";
var value = "B";
var simple = redissimple();

simple.set(key, value, function(err, reply){
    simple.get("A", function(err, reply){
       simple.del("A", function(err, rep){
        console.log(rep);
        simple.quit();
      });
   });
});
```

## License
MIT
