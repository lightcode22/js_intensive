class Node {
  constructor(data, pointer = null) {
    this.data = data;
    this.pointer = pointer;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    // если в списке уже есть узлы
    if (this.head) {
      let currentNode = this.head;

      // пока не встретится узел с указателем на null
      while (currentNode.pointer) {
        currentNode = currentNode.pointer;
      }

      currentNode.pointer = new Node(data);
      this.size++;
    } else {
      // иначе добавить как первый узел
      this.prepend(data);
    }
  }

  prepend(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  insertAt(data, index) {
    // если нужный индекс отрицательный или больше, чем "длина списка + 1"
    if (index < 0 || index > this.size) {
      console.log(`недопустимое значение индекса: ${index}`);
      return;
    }

    let indexCount = 0;
    let previousNode;
    let currentNode = this.head;

    while (indexCount < index) {
      // предыдущим узлом становится текущий узел
      previousNode = currentNode;

      // текущим узлом становится следующий узел
      currentNode = currentNode.pointer;
      indexCount++;
    }

    const node = new Node(data);

    previousNode.pointer = node;
    node.pointer = currentNode;

    this.size++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      console.log(`отсутствует узел с индексом ${index}`);
      return;
    }

    if (index === 0) {
      this.head = this.head.pointer;
      this.size--;
      return;
    }

    let indexCount = 0;
    let previousNode;
    let currentNode = this.head;

    while (indexCount < index) {
      previousNode = currentNode;
      currentNode = currentNode.pointer;
      indexCount++;
    }

    previousNode.pointer = currentNode.pointer;

    this.size--;
  }

  getAt(index) {
    if (index < 0 || index >= this.size) {
      return;
    }

    let currentNode = this.head;
    let indexCount = 0;

    while (indexCount < index) {
      currentNode = currentNode.pointer;
      indexCount++;
    }

    return currentNode.data;
  }

  sort(desc = false) {
    let currentNode;

    for (let i = this.size - 1; i > 0; i--) {
      currentNode = this.head;

      while (currentNode.pointer !== null) {
        if (desc) {
          [currentNode.data, currentNode.pointer.data] = [
            currentNode.data,
            currentNode.pointer.data,
          ].sort((a, b) => (a > b ? -1 : 1));
        } else {
          [currentNode.data, currentNode.pointer.data] = [
            currentNode.data,
            currentNode.pointer.data,
          ].sort((a, b) => (a > b ? 1 : -1));
        }

        currentNode = currentNode.pointer;
      }
    }
  }

  reverse() {
    let currentNode;

    for (let i = this.size - 1; i > 0; i--) {
      currentNode = this.head;

      let count = 0;

      while (count < i) {
        [currentNode.data, currentNode.pointer.data] = [
          currentNode.pointer.data,
          currentNode.data,
        ];

        currentNode = currentNode.pointer;
        count++;
      }
    }
  }

  clear() {
    this.head = null;
    this.size = 0;
  }

  print() {
    if (!this.head) {
      return;
    }

    let currentNode = this.head;
    let listData = [];

    while (currentNode.pointer) {
      listData.push(currentNode.data);
      currentNode = currentNode.pointer;
    }

    listData.push(currentNode.data);

    console.log(listData.join(" -> "));
  }
}

// Методы:
//  append (insert last)
//  prepend (insert first)
//  insertAt
//  removeAt
//  getAt (получить значение узла по индексу)
//  sort(true/false) -> true = descending, false (default) = ascending
//  clear (обнулить список)
//  print (вывести строкой значения всех узлов)

const linked = new LinkedList();

linked.append("жучка");
linked.append("внучка");
linked.prepend("кошка");
linked.append("бабка");
linked.append("дедка");
linked.prepend("мышка");
linked.append("репка");
