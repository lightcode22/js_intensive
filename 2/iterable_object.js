const myIterable = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    if (!(this.from < this.to)) {
      throw new Error("задан неверный диапазон");
    }

    let current = this.from;
    let isDone = false;

    return {
      next: () => {
        isDone = current > this.to;

        return {
          done: isDone,
          value: current++,
        };
      },
    };
  },
};
