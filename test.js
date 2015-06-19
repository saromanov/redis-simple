var assert = require('assert');
var simple = require('./')();


var key = "A";
var value = "B";

it("should set, get and remove string value", function() {
    simple.set(key, value, function(err) {
        if (err !== null) {
            throw new Error("This should not contain errors");
        }

        simple.get(key, function(err, reply) {
            assert.equal(reply, value);
        });

        simple.del(key, function(err, reply) {
            assert.equal(reply, 1);
            simple.quit();
        });
    });
});
