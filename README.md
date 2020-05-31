## call-once-fn

Calls a callback only once.

```
var next = once('call-once-fn');
var assert = require('assert');

var results = [];

function addResults() {
  results.push(arguments);
}

var callback1 = once(addResults);
assert.ok(!results.length);
callback1('error', 'value1', 'value2');
assert.equal(results.length, 1);

assert.equal(results.length, 1);
callback1('error', 'value1', 'value2');
assert.equal(results.length, 1);
```
