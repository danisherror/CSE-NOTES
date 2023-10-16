const Stack = require('./stack12a');
const Queue = require('./queue12a');



Stack.push(1);
Stack.push(2);
Stack.push(3);
console.log(Stack.pop()); 
console.log(Stack.top()); 
console.log(Stack.size()); 



Queue.enqueue('A');
Queue.enqueue('B');
Queue.enqueue('C');
console.log(Queue.dequeue());
console.log(Queue.front()); 
console.log(Queue.size());