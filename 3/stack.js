class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(data) {
    this.storage[this.size] = data;
    this.size++;
    return this.storage;
  }

  pop() {
    if (this.size === 0) {
      console.log("stack is empty, nothing to pop");
      return;
    }

    let popped = this.storage[this.size - 1];
    delete this.storage[this.size - 1];
    this.size--;
    return popped;
  }

  peek() {
    if (this.size === 0) {
      console.log("stack is empty, nothing to peek");
      return;
    }
    return this.storage[this.size - 1];
  }

  getSize() {
    return this.size;
  }

  print() {
    let output = [];
    for (let i = 0; i < this.size; i++) {
      output.push(this.storage[i]);
    }
    console.log(output.join(", "));
  }

  clear() {
    this.storage = [];
    this.size = 0;
    return this.storage;
  }
}
