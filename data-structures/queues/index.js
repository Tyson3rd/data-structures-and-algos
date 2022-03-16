class Queue {
    constructor() {
      this.elements = {};
      this.top = 0;
      this.bottom = 0;
    }
    enqueue(element) {
      this.elements[this.bottom] = element;
      this.bottom++;
    }
    dequeue() {
      const item = this.elements[this.top];
      delete this.elements[this.top];
      this.top++;
      return item;
    }
    peek() {
      return this.elements[this.top];
    }
    get length() {
      return this.bottom - this.top;
    }
    get isEmpty() {
      return this.length === 0;
    }
  }
module.exports = Queue