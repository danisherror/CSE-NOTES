// stack.js
class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    if (!this.isEmpty()) {
      return this.stack.pop();
    }
    return null;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.stack[this.stack.length - 1];
    }
    return null;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }
}

module.exports = Stack;
