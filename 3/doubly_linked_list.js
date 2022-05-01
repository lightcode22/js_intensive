class Node {
  constructor(data, prevPtr = null, nextPtr = null) {
    this.data = data;
    this.prevPtr = prevPtr;
    this.nextPtr = nextPtr;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(data) {
    if (this.tail) {
      let oldTail = this.tail;
      this.tail = new Node(data);
      oldTail.nextPtr = this.tail;
      this.tail.prevPtr = oldTail;
    } else {
      this.head = this.tail = new Node(data);
    }
    this.size++;
  }

  prepend(data) {
    if (this.head) {
      let oldHead = this.head;
      this.head = new Node(data);
      oldHead.prevPtr = this.head;
      this.head.nextPtr = oldHead;
    } else {
      this.head = this.tail = new Node(data);
    }
    this.size++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return;
    }

    if (index === 0) {
      this.head = this.head.nextPtr;
      this.head.prevPtr = null;
      this.size--;
      return;
    }

    if (index === this.size - 1) {
      this.tail = this.tail.prevPtr;
      this.tail.nextPtr = null;
      this.size--;
      return;
    }

    let indexCount;
    let currentNode;
    // если искомый индекс в первой половине списка, то искать с начала
    if (index < this.size / 2) {
      indexCount = 1;
      currentNode = this.head.nextPtr;

      while (indexCount < index) {
        currentNode = currentNode.nextPtr;
        indexCount++;
      }
    } else {
      indexCount = this.size - 1;
      currentNode = this.tail;

      while (index < indexCount) {
        currentNode = currentNode.prevPtr;
        indexCount--;
      }
    }

    let previousNode = currentNode.prevPtr;
    currentNode = currentNode.nextPtr;
    previousNode.nextPtr = currentNode;

    currentNode.prevPtr = previousNode;

    this.size--;
  }

  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      console.log(`недопустимое значение индекса: ${index}`);
      return;
    }

    if (index === 0) {
      this.preped(data);
      return;
    }

    if (index === this.size) {
      this.append(data);
      return;
    }

    let indexCount;
    let currentNode;

    if (index < this.size / 2) {
      indexCount = 1;
      currentNode = this.head.nextPtr;

      while (indexCount < index) {
        currentNode = currentNode.nextPtr;
        indexCount++;
      }
    } else {
      indexCount = this.size - 1;
      currentNode = this.tail;

      while (index < indexCount) {
        currentNode = currentNode.prevPtr;
        indexCount--;
      }
    }

    const node = new Node(data);

    let previousNode = currentNode.prevPtr;

    previousNode.nextPtr = node;
    node.prevPtr = previousNode;
    currentNode.prevPtr = node;
    node.nextPtr = currentNode;

    this.size++;
  }

  getAt(index) {
    if (index < 0 || index >= this.size) {
      return;
    }

    let indexCount;
    let currentNode;

    if (index < this.size / 2) {
      indexCount = 0;
      currentNode = this.head;

      while (indexCount < index) {
        currentNode = currentNode.nextPtr;
        indexCount++;
      }
    } else {
      indexCount = this.size - 1;
      currentNode = this.tail;

      while (index < indexCount) {
        currentNode = currentNode.prevPtr;
        indexCount--;
      }
    }

    return currentNode.data;
  }

  clear() {
    this.head = this.tail = null;
    this.size = 0;
  }

  print() {
    if (!this.head) {
      return;
    }

    let currentNode = this.head;
    let listData = [];

    while (currentNode.nextPtr) {
      listData.push(currentNode.data);
      currentNode = currentNode.nextPtr;
    }

    listData.push(currentNode.data);

    console.log(listData.join(" <-> "));
  }
}
