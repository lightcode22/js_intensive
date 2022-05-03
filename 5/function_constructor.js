const Calculator = function (x, y) {
  if (isNaN(x) || isNaN(y)) {
    throw new Error("один или оба параметра не являются числами");
  }

  this.x = Number(x);
  this.y = Number(y);
};

Calculator.prototype.setX = function (num) {
  if (isNaN(num)) {
    throw new Error("переданное значение не является числом");
  }
  this.x = Number(num);
};

Calculator.prototype.setY = function (num) {
  if (isNaN(num)) {
    throw new Error("переданное значение не является числом");
  }
  this.y = Number(num);
};

Calculator.prototype.logSum = function () {
  console.log(this.x + this.y);
};

Calculator.prototype.logMul = function () {
  console.log(this.x * this.y);
};

Calculator.prototype.logSub = function () {
  console.log(this.x - this.y);
};

Calculator.prototype.logDiv = function () {
  if (!this.y) {
    throw new Error(`попытка деления ${this.x} на 0`);
  }
  console.log(this.x / this.y);
};
