'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.cssformat = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/testing.css');
    var actual2 = grunt.file.read('tmp/123.css');
    var expected = grunt.file.read('test/expected/testing.css');
    var expected2 = grunt.file.read('test/expected/123.css');
    test.equal(actual, expected, 'should describe what the default behavior is.');
    test.equal(actual2, expected2, 'should describe what the default behavior is.');
    test.done();
  }
};
