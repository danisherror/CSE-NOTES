// queue.js
class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    if (!this.isEmpty()) {
      return this.queue.shift();
    }
    return null;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.queue[0];
    }
    return null;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }
}

module.exports = Queue;
