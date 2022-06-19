class Calculator {
  constructor(x, y) {
    if (isNaN(x) || isNaN(y)) {
      throw new Error("один или оба параметра не являются числами");
    }

    this.x = Number(x);
    this.y = Number(y);
  }

  setX(num) {
    if (isNaN(num)) {
      throw new Error("переданное значение не является числом");
    }
    this.x = Number(num);
  }

  setY(num) {
    if (isNaN(num)) {
      throw new Error("переданное значение не является числом");
    }
    this.y = Number(num);
  }

  logSum() {
    console.log(this.x + this.y);
  }

  logMul() {
    console.log(this.x * this.y);
  }

  logSub() {
    console.log(this.x - this.y);
  }

  logDiv() {
    if (!this.y) {
      throw new Error(`попытка деления ${this.x} на 0`);
    }
    console.log(this.x / this.y);
  }
}
