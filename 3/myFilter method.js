Array.prototype.myFilter = function (callback, context = this) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) result.push(this[i]);
  }

  return result;
};
