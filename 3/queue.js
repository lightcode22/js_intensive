class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(data) {
    this.storage[this.tail] = data;
    this.tail++;
    return this.storage;
  }

  dequeue() {
    if (this.head === this.tail) {
      console.log("queue is empty, nothing to dequeue");
      return;
    }

    const element = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return element;
  }

  getSize() {
    return this.tail - this.head;
  }

  print() {
    const output = [];
    for (let i of Object.keys(this.storage)) {
      output.push(this.storage[i]);
    }
    console.log(output.join(", "));
  }

  clear() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
    this.size = 0;
  }
}
