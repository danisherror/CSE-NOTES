// main.js
const Stack = require('../stack');
const Queue = require('./queue');

// Stack example
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log('Stack size:', stack.size());
console.log('Top element:', stack.peek());
console.log('Popped element:', stack.pop());
console.log('Popped element:', stack.pop());
console.log('Is stack empty?', stack.isEmpty());

// Queue example
const queue = new Queue();
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');
console.log('Queue size:', queue.size());
console.log('Front element:', queue.peek());
console.log('Dequeued element:', queue.dequeue());
console.log('Front element:', queue.peek());
console.log('Is queue empty?', queue.isEmpty());
