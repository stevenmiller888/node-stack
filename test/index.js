
/**
 * Dependencies.
 */

var Stack = require('..');
var should = require('should');
var assert = require('assert');
var stack;

/**
 * Tests.
 */

describe('stack', function(){
  beforeEach(function(){
    stack = new Stack();
  });

  it('should push elements to the front', function(){
    stack.push(1);
    stack.push(2);
    stack.should.eql({ head: { next: { next: undefined, val: 1 }, val: 2 } });
  });
  
  it('should pop the first element off', function(){
    stack.push('a');
    stack.push('b');
    var ret = stack.pop();
    ret.should.eql('b');
  });
});