
/**
 * Dependencies.
 */

var Node = require('./node');

/**
 * Expose `Stack`
 */

module.exports = Stack;

/**
 * Stack.
 */

function Stack(){
  var self = this;
  var args = [].slice.call(arguments);
  args.forEach(function(arg){
    self.push(arg);
  });
}

/**
 * Add the item to the beginning of the stack.
 */

Stack.prototype.push = function(val){
  var node = new Node();
  node.val = val;

  // empty stack
  if (!this.head){
    node.val = val;
    this.head = node;
    return this;
  }

  // add to the beginning of stack
  var prevHead = this.head;
  this.head = node;
  node.next = prevHead;

  return this;
};

/**
 * Pop the first element off the stack.
 */

Stack.prototype.pop = function(){
  if (!this.head) return;

  var ret = this.head.val;
  this.head = this.head.next;

  return ret;
};
